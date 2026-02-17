import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, mobile, scrapType, location, message } = await req.json();

        // Validate required fields
        if (!name || !mobile) {
            return NextResponse.json(
                { success: false, error: "Name and mobile number are required" },
                { status: 400 }
            );
        }

        // Configure Nodemailer with Zoho SMTP
        const transporter = nodemailer.createTransport({
            host: "smtp.zoho.in",
            port: 465,
            secure: true, // use SSL
            auth: {
                user: process.env.ZOHO_EMAIL,
                pass: process.env.ZOHO_PASSWORD,
            },
        });

        // Email content
        const mailOptions = {
            from: `"AK Enterprises Website" <${process.env.ZOHO_EMAIL}>`,
            to: "info@akenterprisesblr.com",
            replyTo: process.env.ZOHO_EMAIL,
            subject: `New Scrap Enquiry: ${scrapType || "General"} from ${name}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 10px; overflow: hidden;">
          <div style="background-color: #15803d; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">New Business Enquiry</h1>
          </div>
          <div style="padding: 20px; color: #333;">
            <p style="font-size: 16px;">You have received a new lead from the AK Enterprises website contact form.</p>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #f0f0f0; font-weight: bold; width: 30%;">Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #f0f0f0;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #f0f0f0; font-weight: bold;">Mobile:</td>
                <td style="padding: 10px; border-bottom: 1px solid #f0f0f0;">${mobile}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #f0f0f0; font-weight: bold;">Scrap Type:</td>
                <td style="padding: 10px; border-bottom: 1px solid #f0f0f0;">${scrapType || "Not Specified"}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #f0f0f0; font-weight: bold;">Location:</td>
                <td style="padding: 10px; border-bottom: 1px solid #f0f0f0;">${location || "Not Specified"}</td>
              </tr>
            </table>
            <div style="margin-top: 20px;">
              <p style="font-weight: bold;">Message:</p>
              <p style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; line-height: 1.5;">${message || "No message provided."}</p>
            </div>
          </div>
          <div style="background-color: #f4f4f4; padding: 15px; text-align: center; font-size: 12px; color: #666;">
            This email was generated from the contact form on AK Enterprises website.
          </div>
        </div>
      `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: "Enquiry sent successfully" });
    } catch (error) {
        console.error("Nodemailer Error:", error);
        return NextResponse.json(
            { success: false, error: "Failed to send enquiry" },
            { status: 500 }
        );
    }
}
