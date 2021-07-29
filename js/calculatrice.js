
// 1. Fonction addition
// Initialisation d'un compteur
let counter = 1;
function calculer(operateur) {

  // Initialisation des variables du dom
  let input1 = Number(document.getElementById("input1").value), // Valeur de l'input 1
    input2 = Number(document.getElementById("input2").value), // Valeur de l'input 2
    resultatHTml = document.getElementById("result"), // Element au quel il faudra ajouter les resultats de calculs
    customClass, // Personalisation de la class à appliquer
    resultat, // Variable qui contiendra le résultat du calcul
    monId= `li-${counter}`, // initialisation de l'id à utiliser pour le ciblage
    li = document.createElement("li"); // Création d'un élèment que nous réinserrons

  //switch
  // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/switch

  switch (operateur) {
    case "+":
      resultat = `Calcul de ${input1} + ${input2} = ${input1 + input2}; `;
      customClass = 'additionner';
      break;
    case "-":
      resultat = `Calcul de ${input1} - ${input2} = ${input1 - input2}; `;
      customClass = 'soustraire';
      break;
    case "*":
      resultat = `Calcul de ${input1} * ${input2} = ${input1 * input2}; `;
      customClass = 'multiplier';
      break;
    case "/":
      resultat = `Calcul de ${input1} / ${input2} = ${input1 / input2}; `;
      customClass = 'diviser';
      break;

    default:
      console.log("error");
  }
  
  li.id= monId
  li.classList.add(customClass);

  // ajouter les attribut à li pour ajouter une class selon l'opérateur
  resultat += `<bouton onclick=\"removeElt(event)\" data_target="${monId}">X</button>`
  li.innerHTML = resultat;
  resultatHTml.appendChild(li);
  // Incrémentation du compteur
  counter++;
}
// Fonction de suppression d'élement
function removeElt (event) {
  let selectedId = event.target.getAttribute("data_target")
  let currentElt = document.getElementById(selectedId)
  currentElt.remove()
}

//Template-Jquery-VueJs//