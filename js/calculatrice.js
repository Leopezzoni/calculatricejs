function remove (event) {
  let addition = document.getElementById("addition");
  addition.remove(event);
  console.log(event);
  console.log(event.target);
}
// 1. Fonction addition
function calculer(operateur) {
  console.log("oper : ", operateur);
  // deux variables input et une variable résultat
  let input1 = Number(document.getElementById("input1").value),
    input2 = Number(document.getElementById("input2").value),
    resultatHTml = document.getElementById("result"),
    resultat;
  let li = document.createElement("li");
  //switch
  // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/switch
  switch (operateur) {
    case "+":
      resultat = `Calcul de ${input1} + ${input2} = ${input1 + input2}; `;
      li.id = "addition";
      console.log("+");
      break;
    case "-":
      resultat = `Calcul de ${input1} - ${input2} = ${input1 - input2}; `;
      console.log("-");
      break;
    case "*":
      resultat = `Calcul de ${input1} * ${input2} = ${input1 * input2}; `;
      console.log("*");
      break;
    case "/":
      resultat = `Calcul de ${input1} / ${input2} = ${input1 / input2}; `;
      console.log("/");
      break;

    default:
      console.log("error");
  }

  // ajouter les attribut à li pour ajouter une class selon l'opérateur
  resultat += "<button onclick=\"remove(event)\">X</button>";
  li.innerHTML = resultat;
  resultatHTml.appendChild(li);
}
