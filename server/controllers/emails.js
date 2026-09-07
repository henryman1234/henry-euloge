import nodemailer from "nodemailer";


export const sendEmails = async  (req, res) => {

    const {content, name, email} = req.body;

    try {
        // Configure the transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD
            }
        })

        // send email
        const info = await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: process.env.GMAIL_USER,
            subject: "Demande de collaboration",
            text: "Je souhaite vous contacter pour un service",
            replyTo: email,
            html: `
                <h3>Nouveau message 🔔</h3>

                <p>Nom: <b>${name}</b></p>

                <p>Expéditeur: <b>${email}</b></p>

                <p>${content}</p>
            `
        })

        console.log("Email envoyé: ", info.response)
        res.status(200).json({success: true, message: "Email envoyé avec succès"})
        
    } catch (err) {
        console.error("Email non envoyé!: ", err)
        process.exit(1)
    }
} 