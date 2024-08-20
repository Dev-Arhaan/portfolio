import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_EMAIL_API_KEY);

export const sendEmail = async (formData: FormData) => {
  console.log('running on server');
  console.log(formData.get('senderEmail'));
  const message = formData.get('message');
  const senderEmail = formData.get('senderEmail');

    if (!senderEmail || typeof senderEmail !== 'string') {
        return{
            error: 'Invalid sender email'
        }
    }
    if (!message || typeof message !== 'string') {
        return{
            error: 'Invalid message'
        }
    }

    resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'arhaanworkmail@gmail.com',
        subject: 'From Posrtfolio',
        html: `<p>${message}</p>`,
        replyTo: senderEmail
      });
};
