import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

router.post('/contact', async (req, res) => {
    console.log(`Hiting contact route with data: ${JSON.stringify(req.body)}`);
    const { name, email, message } = req.body;
    console.log("Email ID: ", process.env.EMAIL_USER)
    console.log("Password: ", process.env.EMAIL_PASS)

    if (!name || !email || !message) {
        console.log('Validation failed: Missing fields');
        return res.json({ msg: 'Please fill all the fields' });
    }

    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL,
            subject: `Message from ${name}`,
            html: `
                <h3>Information</h3>
                <ul>
                    <li><strong>Name:</strong> ${name}</li>
                    <li><strong>Email:</strong> ${email}</li>
                </ul>
                <h3>Message</h3>
                <p>${message}</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        console.log(`Message sent successfully from ${email}`);
        return res.status(200).json({ msg: 'Your message has been sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ msg: 'Failed to send message. Please try again later.' });
    }
});

export default router;
