import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, countryCode, phone, email, service, message } = data;

    const fullPhone = phone ? `${countryCode || ""} ${phone}`.trim() : "N/A";
    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
    });

    const payload = {
      timestamp,
      name: name || "",
      phone: fullPhone,
      email: email || "",
      service: service || "General Inquiry",
      message: message || "",
    };

    // Forward to Google Apps Script Web App webhook URL if configured
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
      } catch (webhookError) {
        console.error("Error sending data to Google Sheets webhook:", webhookError);
      }
    } else {
      console.log("Form submission received (webhook not configured yet):", payload);
    }

    return NextResponse.json(
      { success: true, message: "Submission received successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process contact submission" },
      { status: 500 }
    );
  }
}
