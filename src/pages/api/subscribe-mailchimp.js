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
    mailchimp.setConfig({
      apiKey: '7431d3cb257eaf454eeb91b4b5943a75-us22',
      server: 'us22'
    });

    const { email, firstName, lastName } = req.body;

    // Log the request data
    console.log('Request data:', {
      email,
      firstName,
      lastName
    });

    // Step 1: Try to get list info first
    try {
      const listInfo = await mailchimp.lists.getList('4bca6a5a1d');
      console.log('List info retrieved:', listInfo.name);
    } catch (listError) {
      console.error('List error:', listError.message);
      throw new Error(`List error: ${listError.message}`);
    }

    // Step 2: Try to add member
    try {
      const addSubscriberResponse = await mailchimp.lists.addListMember('4bca6a5a1d', {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      });
      console.log('Subscriber added:', addSubscriberResponse.id);
    } catch (subscriberError) {
      console.error('Subscriber error:', subscriberError.message);
      throw new Error(`Subscriber error: ${subscriberError.message}`);
    }

    // Step 3: Try to get campaign info
    try {
      const campaignInfo = await mailchimp.campaigns.get('33903');
      console.log('Campaign info retrieved:', campaignInfo.settings.title);
    } catch (campaignError) {
      console.error('Campaign error:', campaignError.message);
      throw new Error(`Campaign error: ${campaignError.message}`);
    }

    // Step 4: Try to send campaign
    try {
      await mailchimp.campaigns.send('33903');
      console.log('Campaign sent successfully');
    } catch (sendError) {
      console.error('Send campaign error:', sendError.message);
      throw new Error(`Send campaign error: ${sendError.message}`);
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Final error:', {
      message: error.message,
      originalError: error.original ? error.original.message : null
    });
    
    return res.status(500).json({
      error: 'Error processing Mailchimp actions',
      details: error.message
    });
  }
}
