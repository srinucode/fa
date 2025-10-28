import express from 'express';
import nodemailer from 'nodemailer';
const router = express.Router();
router.post('/enroll', async (req, res) => {
    console.log(`Hitting enroll route with data: ${JSON.stringify(req.body)}`);
    if (!req.body.name || !req.body.email || !req.body.contact) {
        console.log('Validation failed: Missing fields');
        return res.json({ msg: 'Please fill all the fields' });
    }
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS, // your 16-character app password
            },
            tls: {
                rejectUnauthorized: false, // 👈 allows self-signed certs
            },
        });
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL,
            subject: `New Enrollment from ${req.body.name}`,
            html: `
                <h3>Enrollment Details</h3>
                <ul>                
                    <li><strong>Name:</strong> ${req.body.name}</li>
                    <li><strong>Email:</strong> ${req.body.email}</li>
                    <li><strong>Contact:</strong> ${req.body.contact}</li>      
                </ul>
            `,
        };
        await transporter.sendMail(mailOptions);

        console.log(`Enrollment email sent successfully for ${req.body.email}`);
        return res.status(200).json({ msg: 'You have been enrolled successfully!' });
    } catch (error) {
        console.log("User Email ID: ", process.env.EMAIL_USER);
        console.error('Error sending enrollment email:', error);
        return res.status(500).json({ msg: 'Enrollment failed. Please try again later.' });
    }
});
export default router;