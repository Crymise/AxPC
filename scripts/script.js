function sendMail (){
    let parms = {
        name :  document.getElementById("name").value,
        usercontact :  document.getElementById("usercontact").value, 
        algorithm :  document.getElementById("algorithm").value,
    }
    
    emailjs.send("service_lhcekd6","template_p3urris",parms).then(alert("Email Sent"))
}
