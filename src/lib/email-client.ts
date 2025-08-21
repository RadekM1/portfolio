"use server";
import nodemailer from "nodemailer";
import validator from "validator";
import { FormSchema } from "../schema/contact-form";

export const emailClient = async (data: FormSchema) => {
  try {
    if (!data.name || validator.isEmpty(data.name.trim())) {
      throw new Error("Jméno je povinné.");
    }
    if (!data.email || !validator.isEmail(data.email)) {
      throw new Error("Neplatná e-mailová adresa.");
    }
    if (data.tel && !validator.isMobilePhone(data.tel, "cs-CZ")) {
      throw new Error("Neplatné telefonní číslo.");
    }

    const name = validator.escape(data.name.trim());
    const email = validator.normalizeEmail(data.email) || data.email;
    const tel = data.tel ? validator.escape(data.tel.trim()) : "";
    const noteRaw = data.note || "";
    const noteSafe = validator.escape(noteRaw).replace(/\n/g, "<br>");

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const subject = `Nová zpráva od ${name}`;
    const htmlBody = `
      <h2>Nová zpráva z formuláře “radekmorong.cz”</h2>
      <ul>
        <li><strong>Jméno:</strong> ${name}</li>
        <li><strong>E-mail:</strong> ${email}</li>
        <li><strong>Telefon:</strong> ${tel}</li>
      </ul>
      <h3>Text zprávy:</h3>
      <p>${noteSafe}</p>
    `;

    await transporter.sendMail({
      from: '"radekmorong.cz" <info@radekmorong.cz>',
      to: process.env.EMAIL_DESTINATION,
      replyTo: email,
      subject,
      text: `
      Nová zpráva od ${name} 

      E-mail: ${email}
      Telefon: ${tel}

      Poznámka:
      ${noteRaw}
      `,
      html: htmlBody,
    });

    return true;
  } catch (error) {
    console.log("Error fetching email response:", error);
    return false;
  }
};
