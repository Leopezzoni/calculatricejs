function remove (event) {
  console.log("toto", event);
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

  li.innerHTML = resultat;
  resultatHTml.appendChild(li);
}
