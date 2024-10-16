function sendMail (){
    let parms = {
        name :  document.getElementById("name"),
        communication :  document.getElementById("communication"),
        message :  document.getElementById("message"),
    }
    
    emailjs.send(service_lhcekd6,template_p3urris,parms).then(alert("Email Sent"))
}