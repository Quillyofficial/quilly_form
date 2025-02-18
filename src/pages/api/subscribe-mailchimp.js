import mailchimp from '@mailchimp/mailchimp_marketing';

export default async function handler(req, res) {

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

  try {
    // Check if all required environment variables are present
    // if (!process.env.REACT_APP_MAILCHIMP_API_KEY) {
    //  throw new Error('MAILCHIMP_API_KEY is missing');
   // }
   // if (!process.env.REACT_APP_MAILCHIMP_SERVER_PREFIX) {
   //   throw new Error('MAILCHIMP_SERVER_PREFIX is missing');
   // }
   // if (!process.env.REACT_APP_MAILCHIMP_LIST_ID) {
   //   throw new Error('MAILCHIMP_LIST_ID is missing');
  //  }
 
    // Log configuration
    console.log('Attempting Mailchimp operation with:', {
      listId: '4bca6a5a1d',
      campaignId: '33903'
    });

    // Configure Mailchimp with exact environment variable names
    mailchimp.setConfig({
      apiKey: '91bdfeda8cb910b36d5c518ab22999ec-us22',
      server: 'us22'
    });

    const { email, firstName, lastName } = req.body;

    // Add member to list using exact environment variable name
    const addSubscriberResponse = await mailchimp.lists.addListMember(
      '4bca6a5a1d',
      {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    );

    // Then try sending the campaign separately
    try {
      await mailchimp.campaigns.send('33903');
      console.log('Successfully sent campaign');
    } catch (campaignError) {
      console.error('Campaign error:', campaignError.message);
      // Don't throw the error, just log it
    }

    return res.status(200).json({ success: true });
} catch (error) {
    console.error('Detailed error:', {
      message: error.message,
      type: error.type,
      path: error.path,
      listId: '4bca6a5a1d',
      campaignId: '33903'
    });
    
    return res.status(500).json({
      error: 'Error processing Mailchimp actions',
      details: error.message
    });
  }
}
