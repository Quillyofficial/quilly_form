import mailchimp from '@mailchimp/mailchimp_marketing';

export default async function handler(req, res) {
  // Debug logging with new variable names
  console.log('Environment Variables Status:', {
    'API_KEY': process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY || 'missing',
    'LIST_ID': process.env.NEXT_PUBLIC_MAILCHIMP_LIST_ID || 'missing',
    'SERVER_PREFIX': process.env.NEXT_PUBLIC_MAILCHIMP_SERVER_PREFIX || 'missing',
    'CAMPAIGN_ID': process.env.NEXT_PUBLIC_MAILCHIMP_CAMPAIGN_ID || 'missing'
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
    // Configure Mailchimp with new variable names
    mailchimp.setConfig({
      apiKey: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY,
      server: process.env.NEXT_PUBLIC_MAILCHIMP_SERVER_PREFIX
    });

    const { email, firstName, lastName } = req.body;

    const addSubscriberResponse = await mailchimp.lists.addListMember(
      process.env.NEXT_PUBLIC_MAILCHIMP_LIST_ID,
      {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    );

    if (process.env.mailchimp_campaign_id) {
      await mailchimp.campaigns.send(process.env.NEXT_PUBLIC_MAILCHIMP_CAMPAIGN_ID);
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
