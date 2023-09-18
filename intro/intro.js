console.log("Mon script marche?")
//alert("Ecriture de texte de bienvenue")
//const prenom = prompt("Quel est votre prénom?")
//console.log(prenom)
//document.write("<br>Bonjour " + prenom + " ! ")

const nomEleves = Array("Marwan", "Rayan", "Robert")

/*for(var i = 0; i < nomEleves.length; i++)
{
    console.log(nomEleves[i])
}

for(nom in nomEleves){
    console.log(nomEleves[nom])
}*/


/*
nomEleves.forEach(unNomEleve =>{
    console.log(unNomEleve)
})*/

//const noteMathsBac = prompt("Note en math?")

/*
if (noteMathsBac == 20)
{
    console.log("Bravo")
}
else
{
    console.log("Dommage")
}*/

/*
const resultat = noteMathsBac == 20 ? "Bravo, votre note est " + noteMathsBac :
    20 > noteMathsBac && noteMathsBac > 10 ? "Pas si mal pour " + noteMathsBac :
    "Dommage, votre note est " + noteMathsBac

console.log(resultat)
*/

function auCarre (unNombre)
{
    return unNombre * unNombre
}

const choixUtilisateur = prompt("Quel nombre pour le mettre au carré?")
console.log(auCarre(choixUtilisateur))
//const carre2 = (x) => x*x