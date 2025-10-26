import { NextResponse } from "next/server";
import Brevo from "@getbrevo/brevo";

export async function POST(req: Request) {
  const { name, email, phone, message, token } = await req.json();

  // 1️⃣ Kiểm tra reCAPTCHA
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json({ success: false, error: "Missing secret key" });
  }

  if (!token) {
    return NextResponse.json({ success: false, error: "Missing reCAPTCHA token" });
  }

  try {
    const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secretKey}&response=${token}`,
    });

    const verifyData = await verifyRes.json();

    if (!verifyData.success || (verifyData.score && verifyData.score < 0.3)) {
      console.error("reCAPTCHA failed:", verifyData);
      return NextResponse.json({ success: false, error: "Captcha verification failed" });
    }

    // 2️⃣ Cấu hình Brevo SDK
    const apiInstance = new Brevo.TransactionalEmailsApi();
    apiInstance.setApiKey(
      Brevo.TransactionalEmailsApiApiKeys.apiKey,
      process.env.BREVO_API_KEY!
    );

    // 3️⃣ Tạo email
    const sendSmtpEmail = new Brevo.SendSmtpEmail();
    sendSmtpEmail.subject = "Tin nhắn mới từ form liên hệ";
    sendSmtpEmail.sender = { name: "Website DOKHANG", email: "tuanvdtd2k4@gmail.com" }; // 👈 phải là email đã xác minh trong Brevo
    sendSmtpEmail.to = [{ email: "chuhoi09.dt@gmail.com", name: "Admin" }];
    sendSmtpEmail.replyTo = { name, email }; // 👈 người điền form
    sendSmtpEmail.htmlContent = `
      <h3>Thông tin liên hệ mới:</h3>
      <p><strong>Họ tên:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Số điện thoại:</strong> ${phone}</p>
      <p><strong>Nội dung:</strong></p>
      <p>${message}</p>
    `;

    // 4️⃣ Gửi email
    const response = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log("Brevo API response:", response);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json({ success: false, error: "Lỗi máy chủ" });
  }
}
