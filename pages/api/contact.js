import { transporter } from "../../config/nodemailer";
import generateEmailTemplate from "../../lib/emailTemplate";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    
    const email = 'mymtechgroupcorp@gmail.com';
    const mailOptions = {
      from: `"ELLOS" <${data.email}>`,
      to: `"NOSOTROS" <${email}>`,
      subject: "M-M TECH WEB"
    };
    
    if (!data.email || !data.phone || !data.message || !data.nombre) {
      return res.status(400).json({ message: "Bad request" });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        ...generateEmailTemplate(data),
        subject: data.message,
      });

      return res.status(200).json({ success: true });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(400).json({ message: "Bad request" });
};

export default handler;
