// On stocke dans des variables les éléments HTML sur lesquels on veut agir
let inputText = document.querySelector('#input-text');
let contenuHTML = document.querySelector('#contenu-html');

// Création d'une fonction à appeler dès qu'une touche sera relachée dans la zone de saisie #user-input. 
function livePreview() {
    contenuHTML.innerHTML = inputText.value;    // pour plus d'info sur innerHTML il y ce lien : https://developer.mozilla.org/fr/docs/Web/API/Element/innerHTML
  }

  // Appel de la fonction lors d'un événement 'keyup'.
  inputText.addEventListener('keyup', livePreview);

// On pré-rempli #user-input avec le contenu de #contenuHTML, pour donner
// un exemple à l'utilisateur dès que la page se charge.
inputText.value = contenuHTML.innerHTML;