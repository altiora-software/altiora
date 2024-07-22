// solicitudes de API * (funciones de los endpoints)
export const sendContactForm = async (data) =>
  fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    },
  }).then((res)=>{
    if(!res.ok) throw new Error('Ups! Fallo el envio de mensaje');
    return res.json()
  });
