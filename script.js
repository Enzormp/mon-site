// Bouton index.html
const bouton = document.getElementById("monBouton");
if (bouton) {
  const message = document.getElementById("message");
  bouton.addEventListener("click", function() {
    message.textContent = "Bonjour, je suis Enzo ! 👋";
  });
}

// Formulaire contact.html
const boutonEnvoyer = document.getElementById("envoyer");
if (boutonEnvoyer) {
  const confirmation = document.getElementById("confirmation");
  boutonEnvoyer.addEventListener("click", function() {
    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("messageContact").value;

    if (nom === "" || email === "" || message === "") {
      confirmation.textContent = "❌ Remplis tous les champs !";
      confirmation.style.color = "red";
    } else {
      confirmation.textContent = "✅ Merci " + nom + ", ton message a bien été envoyé !";
      confirmation.style.color = "green";
    }
  });
}