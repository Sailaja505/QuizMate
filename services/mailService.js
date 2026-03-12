const nodemailer = require('nodemailer');

exports.sendThresholdNotification = async (email) => {
  // Configure the transporter with an app password
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'allu.durgasailaja@gmail.com',  // Replace with your email
      pass: 'mutf mfft vzub smme'  // Replace with your generated app password
    }
  });

  // Email options
  const mailOptions = {
    from: 'allu.durgasailaja@gmail.com',
    to:'mounikabantu.42@gmail.com',
    subject: 'New Quiz Alert: Challenge Your Knowledge!',
    text: "Hello, We're excited to inform you that a new quiz has been added to our platform! This is a great opportunity to test your knowledge and see how well you perform.\nGet started now and see how you fare!\n\nHappy Learning!"
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent successfully: ${info.response}`);
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
