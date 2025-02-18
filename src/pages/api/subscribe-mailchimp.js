import mailchimp from '@mailchimp/mailchimp_marketing';

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

const accessKey = process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY;

console.log(accessKey);
return;

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, firstName, lastName } = req.body;

  console.log('Validating request data:', {
    hasEmail: !!email,
    hasFirstName: !!firstName,
    hasLastName: !!lastName
  });

  try {
    // Initialize Mailchimp
    mailchimp.setConfig({
      apiKey: 'c7929cd3b2b24ae4957c42cd667987a2-us22',
      server: 'us22'
    });

    // Test API connection first
    try {
      const pingResponse = await mailchimp.ping.get();
      console.log('Mailchimp connection test:', pingResponse);
    } catch (pingError) {
      console.error('Connection test failed:', pingError.message);
      throw new Error('Failed to connect to Mailchimp');
    }

    // Add to list
    let subscribeResponse = null;
    let isAlreadySubscribed = false;

    try {
      subscribeResponse = await mailchimp.lists.addListMember('4bca6a5a1d', {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      });
      console.log('Successfully added to list:', subscribeResponse.id);
    } catch (error) {
      // Check if user already exists
      if (error.response && error.response.status === 400) {
        console.log('User might already be subscribed');
        isAlreadySubscribed = true;
      } else {
        throw error;
      }
    }

    // Only try to send campaign if subscribe worked or user already exists
    if (subscribeResponse || isAlreadySubscribed) {
      try {
        await mailchimp.campaigns.send('33903');
        console.log('Campaign sent successfully');
      } catch (campaignError) {
        console.error('Campaign send failed:', campaignError.message);
        // Don't fail the whole request if campaign send fails
      }
    }

    return res.status(200).json({ 
      success: true,
      message: 'Subscription processed successfully'
    });

  } catch (error) {
    console.error('Operation failed:', {
      message: error.message,
      type: error.type,
      status: error.status,
      detail: error.detail
    });

    return res.status(500).json({
      error: 'Subscription processing failed',
      details: error.message
    });
  }
}
