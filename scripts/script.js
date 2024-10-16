function sendMail (){
    let parms = {
        name :  document.getElementById("name").value,
        communication :  document.getElementById("communication").value,
        message :  document.getElementById("message").value,
    }
    
    emailjs.send(service_lhcekd6,template_p3urris,parms).then(alert("Email Sent"))
}
