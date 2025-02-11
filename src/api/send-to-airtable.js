export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }
  
    try {
      const airtableWebhookURL = "https://hooks.airtable.com/workflows/v1/genericWebhook/app2YvAhxGiLB0VMW/wflpsN5Y6K3s3pkkc/wtr72TaZj1RmhgCja";
  
      const response = await fetch(airtableWebhookURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      });
  
      const data = await response.text(); // Airtable may return plain text
      res.status(response.status).send(data);
    } catch (error) {
      console.error("Error forwarding request:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  