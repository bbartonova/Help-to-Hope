import sgMail from '@sendgrid/mail';

export default async (req, res) => {
  if (req.method === 'POST') {
    console.log('Sending e-mail.');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: 'helptohope.info@gmail.com', // Change to your recipient
      from: 'helptohope.info@gmail.com', // Change to your verified sender
      subject: `${req.body.contactId}: ${
        req.body.projectName || req.body.helperName
      }`,
      text: `${JSON.stringify(req.body)}`,
      html: `${JSON.stringify(req.body)}`,
    };
    try {
      await sgMail.send(msg);
      console.log('Sent successfully.');
      return res.status(200).json(req.body);
    } catch (err) {
      console.log('Error sending data to sendgrid');
    }
    return res.status(200).json(req.body);
  }
};
