import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';

const resend = new Resend("re_GpqAnz47_2jdUi1yPhFpjFNXweexsjXea");

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['sebastianipl0131@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'John' }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
