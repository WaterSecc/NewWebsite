import nodemailer from "nodemailer";

export async function POST(req) {
  const data = await req.json();

  console.log("USING HOST:", process.env.HOST);
  console.log("USING PORT:", process.env.MAIL_PORT);

  const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: Number(process.env.MAIL_PORT), // force number
    secure: true, // true for 465
    auth: {
      user: "ktlili@water-sec.com",
      pass: "sthkuutivnrapjmj",
    },
  });

  try {
    await transporter.sendMail({
      from: data.email,
      to: "mguenbri@water-sec.com,support@water-sec.com",
      subject: `[Request Demo Page] Message from ${data.firstName} ${data.lastName}`,
      html: `
        Contact FullName: <b>${data.firstName} ${data.lastName}</b><br>
        Phone Number: <b>${data.phoneNumber}</b><br>
        Email: <b>${data.email}</b><br>
        Job Position: <b>${data.jobPosition}</b><br>
        Company: <b>${data.company}</b><br>
        Company Size: <b>${data.companySize}</b><br>
        Industry: <b>${data.industry}</b><br>
        Potential Use Case: ${data.potentialUseCase}
      `,
    });

    return new Response("success", { status: 200 });
  } catch (err) {
    console.error("Mailer error:", err);
    return new Response("Mailer error", { status: 500 });
  }
}
