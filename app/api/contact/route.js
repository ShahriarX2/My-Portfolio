import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const body = await request.json();
  const { firstName, lastName, email, message } = body;

  try {
    const { data, error } = await resend.emails.send({
      from: "Shahriar Portfolio <onboarding@resend.dev>", // No domain? Use this Resend default sender
      to: "cocguru9@gmail.com",
      subject: `Message from ${firstName} ${lastName}`,
      text: `From: ${email}\n\n${message}`,
    });

    if (error) {
      return Response.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    } else {
      return Response.json({ success: true, data }, { status: 200 });
    }
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
