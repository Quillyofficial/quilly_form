import mailchimp from '@mailchimp/mailchimp_marketing';

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, firstName, lastName } = req.body;

    // Log request data
    console.log('Received request data:', {
      email,
      firstName,
      lastName
    });

    // Configure Mailchimp
    mailchimp.setConfig({
      apiKey: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY,
      server: process.env.NEXT_PUBLIC_MAILCHIMP_SERVER_PREFIX
    });

    // Validate list existence first
    try {
      console.log('Checking list...');
      const listInfo = await mailchimp.lists.getList(process.env.NEXT_PUBLIC_MAILCHIMP_LIST_ID);
      console.log('List found:', listInfo.name);
    } catch (listError) {
      console.error('List check error:', {
        message: listError.message,
        response: listError.response?.text,
        status: listError.response?.status
      });
      throw listError;
    }

    // Prepare member data
    const memberData = {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName
      }
    };

    console.log('Attempting to add member with data:', memberData);

    // Try to add member
    try {
      const addMemberResponse = await mailchimp.lists.addListMember(
        process.env.NEXT_PUBLIC_MAILCHIMP_LIST_ID,
        memberData
      );

      console.log('Member added successfully:', addMemberResponse.id);

      // Try to send campaign
      if (process.env.MAILCHIMP_CAMPAIGN_ID) {
        try {
          await mailchimp.campaigns.send(process.env.NEXT_PUBLIC_MAILCHIMP_CAMPAIGN_ID);
          console.log('Campaign sent successfully');
        } catch (campaignError) {
          console.error('Campaign send error:', {
            message: campaignError.message,
            response: campaignError.response?.text,
            status: campaignError.response?.status
          });
        }
      }

      return res.status(200).json({ 
        success: true,
        member_id: addMemberResponse.id 
      });

    } catch (memberError) {
      console.error('Member add error:', {
        message: memberError.message,
        response: memberError.response?.text,
        status: memberError.response?.status,
        data: memberData
      });
      throw memberError;
    }

  } catch (error) {
    console.error('Final error:', {
      message: error.message,
      type: error.type,
      status: error.response?.status,
      detail: error.response?.text
    });

    return res.status(500).json({
      error: 'Error processing request',
      details: error.message
    });
  }
}
