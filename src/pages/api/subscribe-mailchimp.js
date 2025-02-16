import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX
});

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

  const { email, firstName, lastName } = req.body;

  try {
    // 1. First add the subscriber to your list
    const addSubscriberResponse = await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName
      }
    });

    // 2. Send the specific campaign
    await mailchimp.campaigns.send(process.env.MAILCHIMP_CAMPAIGN_ID);

    console.log('Successfully processed Mailchimp actions');
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Mailchimp error:', error);
    res.status(500).json({ 
      error: 'Error processing Mailchimp actions',
      details: error.message 
    });
  }
}
