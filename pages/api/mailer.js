// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from 'nodemailer';

export default (req, res) => {
  if (req.method === 'POST') {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PASSWORD,
      },
    });
    const mailData = {
      from: process.env.MAILER_USER,
      to: process.env.MAILER_USER,
      subject: `Message From ${req.body.name}`,
      text: req.body.name,
      html: <div>{req.body.name}</div>,
    };
    transporter.sendMail(mailData).catch(console.error);
    return res.status(200).json(req.body);
  }

  res.status(200).json({ name: 'John Doe' });
};
