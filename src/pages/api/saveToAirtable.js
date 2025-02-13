import Airtable from 'airtable';

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE_ID);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const record = await base('Users').create([
      {
        fields: {
          'First Name': req.body.firstName,
          'Last Name': req.body.lastName,
          'Email': req.body.email,
          'Phone': req.body.phone,
          'Agreed to Terms': req.body.agreed
        }
      }
    ]);

    return res.status(200).json(record);
  } catch (error) {
    console.error('Airtable Error:', error);
    return res.status(500).json({ error: 'Failed to save to Airtable' });
  }
}
