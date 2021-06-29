// 1. Fonction addition
function calculer(operateur) {
   console.log("oper : ", operateur);
    // deux variables input et une variable résultat
    let input1 = Number(document.getElementById("input1").value),
     input2 = Number(document.getElementById("input2").value),
     resultatHTml = document.getElementById("result");
  
  //switch
  // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/switch
  
     let resultat = `Calcul de ${input1} + ${input2} = ${input1 + input2}; `  ;
        
    let li = document.createElement("li");
    // ajouter les attribut à li pour ajouter une class selon l'opérateur
    
    
    li.innerHTML = resultat;
    resultatHTml.appendChild(li);

}