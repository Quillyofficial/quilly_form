import mailchimp from '@mailchimp/mailchimp_marketing';

export default async function handler(req, res) {
  // Add debug logging for environment variables
  console.log('Checking Environment Variables:', {
    hasApiKey: !!process.env.MAILCHIMP_API_KEY,
    listId: process.env.MAILCHIMP_LIST_ID,
    serverPrefix: process.env.MAILCHIMP_SERVER_PREFIX,
    campaignId: process.env.MAILCHIMP_CAMPAIGN_ID
  });

  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Validate environment variables
  if (!process.env.MAILCHIMP_API_KEY || !process.env.MAILCHIMP_SERVER_PREFIX) {
    console.error('Missing required environment variables');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  // Configure Mailchimp
  mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_SERVER_PREFIX
  });

  const { email, firstName, lastName } = req.body;

  // Log request data
  console.log('Received request data:', { email, firstName, lastName });

  try {
    // 1. Add subscriber to list
    console.log('Adding subscriber to list...');
    const addSubscriberResponse = await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_LIST_ID,
      {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    );
    console.log('Subscriber added successfully:', addSubscriberResponse.id);

    // 2. Send the campaign
    if (process.env.MAILCHIMP_CAMPAIGN_ID) {
      console.log('Sending campaign...');
      await mailchimp.campaigns.send(process.env.MAILCHIMP_CAMPAIGN_ID);
      console.log('Campaign sent successfully');
    }

    return res.status(200).json({ 
      success: true,
      message: 'Successfully subscribed and sent campaign'
    });
  } catch (error) {
    console.error('Detailed Mailchimp error:', {
      message: error.message,
      response: error.response ? {
        text: error.response.text,
        status: error.response.status
      } : 'No response data'
    });

    return res.status(500).json({
      error: 'Error processing Mailchimp actions',
      details: error.message,
      type: error.type || 'unknown'
    });
  }
}
