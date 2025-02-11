import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(express.json());
app.use(cors()); // Allow all origins

app.post("/send-to-airtable", async (req, res) => {
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
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
