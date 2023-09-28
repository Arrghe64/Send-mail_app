/*//* UTILISATION DU SERVICE EN LIGNE : EMAILJS.COM
*   200 mails par mois
*   SDK : <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js">
*   clé : rGaw_46vUAMl6Gu8V
*   service : service_0k9zshy
*   template : template_rvrszac
*/
emailjs.init("rGaw_46vUAMl6Gu8V");

const sendBtn = document.querySelector(".send-btn");
const result = document.querySelector(".result");

sendBtn.addEventListener('click', () => {
    sendEmail();
    to.value = "";
    subject.value = "";
    message.value = "";
});

/**/
function sendEmail() {
    // récupération des info du formulaire
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // envoi de l'email en utilisant emailJS
    emailjs.send("service_0k9zshy", "template_rvrszac", {
        from_email : from,
        to_email: to,
        subject: subject,
        message: message
    }).then(function() {
        result.innHTML = "Email envoyé avec succès !";
        result.style.opacity = 1;

    }, function(error) {
        result.innHTML = "Echec de l'envoi !";
        result.style.opacity = 1;
        console.log(error);
    }
    );
}



