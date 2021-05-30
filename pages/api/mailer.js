import sgMail from '@sendgrid/mail';

export default (req, res) => {
  if (req.method === 'POST') {
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
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent');
      })
      .catch((error) => {
        console.error(error);
      });
    return res.status(200).json(req.body);
  }

  res.status(200).json({ name: 'John Doe' });
};
