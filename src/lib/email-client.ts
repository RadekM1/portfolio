"use client";

import { FormSchema } from "../schema/contact-form";

export const emailClient = async (data: FormSchema) => {
  const url = process.env.NEXT_PUBLIC_url_path;

  const token = process.env.NEXT_PUBLIC_email_token;

  try {
    if (!url) {
      throw new Error("URL path is not defined");
    }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        tel: data.tel,
        password: token,
        zprava: data.note,
      }),
    });
    if (!response.ok) {
      throw new Error("Failed to fetch email response");
    }

    return response.ok;
  } catch (error) {
    console.log("Error fetching email response:", error);
  }
};
