import mailchimp from '@mailchimp/mailchimp_marketing';

export default async function handler(req, res) {
  // Add debug logging for environment variables with exact names
  console.log('Environment Variables Status:', {
    'MAILCHIMP_API_KEY': process.env.MAILCHIMP_API_KEY || 'missing',
    'MAILCHIMP_LIST_ID': process.env.MAILCHIMP_LIST_ID || 'missing',
    'MAILCHIMP_SERVER_PREFIX': process.env.MAILCHIMP_SERVER_PREFIX || 'missing',
    'MAILCHIMP_CAMPAIGN_ID': process.env.MAILCHIMP_CAMPAIGN_ID || 'missing'
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

  try {
    // Check if all required environment variables are present
    if (!process.env.MAILCHIMP_API_KEY) {
      throw new Error('MAILCHIMP_API_KEY is missing');
    }
    if (!process.env.MAILCHIMP_SERVER_PREFIX) {
      throw new Error('MAILCHIMP_SERVER_PREFIX is missing');
    }
    if (!process.env.MAILCHIMP_LIST_ID) {
      throw new Error('MAILCHIMP_LIST_ID is missing');
    }

    // Configure Mailchimp with exact environment variable names
    mailchimp.setConfig({
      apiKey: process.env.MAILCHIMP_API_KEY,
      server: process.env.MAILCHIMP_SERVER_PREFIX
    });

    const { email, firstName, lastName } = req.body;

    // Add member to list using exact environment variable name
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

    // Send campaign using exact environment variable name
    if (process.env.MAILCHIMP_CAMPAIGN_ID) {
      await mailchimp.campaigns.send(process.env.MAILCHIMP_CAMPAIGN_ID);
    }

    console.log('Successfully processed Mailchimp actions');
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Mailchimp error:', error.message);
    return res.status(500).json({
      error: 'Error processing Mailchimp actions',
      details: error.message
    });
  }
}
