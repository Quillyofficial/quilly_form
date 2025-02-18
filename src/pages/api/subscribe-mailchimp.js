import mailchimp from '@mailchimp/mailchimp_marketing';
import crypto from 'crypto';

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

    // Configure Mailchimp
    mailchimp.setConfig({
      apiKey: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY,
      server: process.env.NEXT_PUBLIC_MAILCHIMP_SERVER_PREFIX
    });

    // Create MD5 hash of lowercase email for subscriber ID
    const subscriberHash = crypto.createHash('md5').update(email.toLowerCase()).digest('hex');

    const memberData = {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName
      }
    };

    try {
      // Try to update existing member
      const response = await mailchimp.lists.setListMember(
        process.env.NEXT_PUBLIC_MAILCHIMP_LIST_ID,
        subscriberHash,
        memberData
      );

      console.log('Member updated successfully:', response.id);

      // Try to send campaign
      try {
        await mailchimp.campaigns.send(process.env.NEXT_PUBLIC_MAILCHIMP_CAMPAIGN_ID);
        console.log('Campaign sent successfully');
      } catch (campaignError) {
        console.error('Campaign error:', campaignError.message);
        // Don't fail if campaign send fails
      }

      return res.status(200).json({ 
        success: true,
        message: 'Member updated and campaign sent'
      });

    } catch (error) {
      if (error.status === 404) {
        // Member doesn't exist, add as new
        try {
          const addResponse = await mailchimp.lists.addListMember(
            process.env.NEXT_PUBLIC_MAILCHIMP_LIST_ID,
            memberData
          );
          console.log('New member added successfully:', addResponse.id);
          
          // Try to send campaign
          try {
            await mailchimp.campaigns.send(process.env.NEXT_PUBLIC_MAILCHIMP_CAMPAIGN_ID);
            console.log('Campaign sent successfully');
          } catch (campaignError) {
            console.error('Campaign error:', campaignError.message);
            // Don't fail if campaign send fails
          }

          return res.status(200).json({ 
            success: true,
            message: 'New member added and campaign sent'
          });
        } catch (addError) {
          throw addError;
        }
      } else {
        throw error;
      }
    }

  } catch (error) {
    console.error('Operation failed:', {
      message: error.message,
      status: error.status,
      detail: error.response?.text
    });

    return res.status(500).json({
      error: 'Operation failed',
      details: error.message
    });
  }
}
