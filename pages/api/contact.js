// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { transporter, mailOptions } from "../../config/nodemailer";

const CONTACT_MESSAGE_FIELDS = {
  nombre: "Nombre:",
  email: "Email:",
  message: "Message:",
  phone: "Phone:"
}

// generador de template 
const generateEmailTemplate = (senderData) => {
  const tableData = Object.entries(senderData).reduce((str, [key,value])=>{
    return str += `<tr><td>${key}</td><td>${value}</td></tr>`
  },"");

  return {
    text: `Nombre: ${senderData.nombre} \nTeléfono: ${senderData.phone} \nCorreo: ${senderData.email} \nMensaje: ${senderData.message}`,
    html: `<!DOCTYPE html>
            <html lang="es">
              <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Mensaje Recibido</title>
                <style>
                  body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                  }
            
                  .container {
                    background-color: #fff;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    width: 80%;
                    max-width: 600px;
                    text-align: center;
                  }
            
                  h1 {
                    color: #333;
                  }
            
                  p {
                    color: #555;
                  }
            
                  .info-container {
                    text-align: left;
                    margin-top: 20px;
                  }
            
                  .info-table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 20px;
                  }
            
                  .info-table th, .info-table td {
                    padding: 10px;
                    border-bottom: 1px solid #ddd;
                    text-align: left;
                  }
            
                  .info-table th {
                    background-color: #f2f2f2;
                  }
                </style>
              </head>
              <body>
                <div class="container">
                  <h1>M-M Tech recibió un Mensaje</h1>
                  <p>Has recibido un nuevo mensaje. Aquí están los detalles:</p>
                  <table class="info-table">
                    <tbody>
                      ${tableData}
                    </tbody>
                  </table>
                </div>
              </body>
            </html>
          `,
  };
};




// controlador de contact

const handler = async (req, res) => {
  // si es POST
  if (req.method === "POST") {
    const data = req.body;
    
    const email = 'mymtechgroupcorp@gmail.com';
    const mailOptions = {
      from: '"ELLOS" <' + data.email + ">",
      to: '"NOSOTROS" <' + email + ">",
      subject: "M-M TECH WEB"
    };
    
    // si todos los campos estan completos
    if (!data.email || !data.phone || !data.message || !data.nombre) {
      return res.status(400).json({ message: "Bad request" });
    } // si todo esta bien enviamos info
    try {
      await transporter.sendMail({
        ...mailOptions,
        ...generateEmailTemplate(data),
        subject: data.message,
      });
      // si todo sale bien
      return res.status(200).json({ success: true });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(400).json({ message: "Bad request" });
};

export default handler;
