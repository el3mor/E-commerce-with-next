import { EmailTemplate } from "../../_components/email-template";
import { Resend } from 'resend';

const resend = new Resend("re_hgtE25fF_JqRbYeWYKtuqT4uLaC1Msyss");

export async function POST(req) {
  const body = await req.json();

  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [body.email],
      subject: "Orders From Squid",
      react: EmailTemplate({ body }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
