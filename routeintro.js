/*import {createRequire} from "module"
const require = createRequire(import.meta.url)
import {listeEleves} from "./sources/eleves.mjs";*/

const express = require('express')
const path = require('path')
const app = express()

app.get('/', (requete, resultat) =>

{
    resultat.send("Bonjour");
})

app.get('/accueil', (requete, resultat) =>

{
    resultat.send("Bienvenue sur la page d'accueil");
})

app.get('/panorama', (requete, resultat) =>
{
    resultat.sendFile(path.join(__dirname, '/plandusite.html'));
})

app.get('/bienvenue', (requete, resultat) =>
{
    resultat.sendFile(path.join(__dirname, '/bienvenue.html'));
})




app.get('/exempleParams', (requete, resultat, next) => {

    const nomEtudiant = requete.query.nomEtudiant
    const prenomEtudiant = requete.query.prenomEtudiant
    resultat.send('Bonjour mr ou mme ' + nomEtudiant + " " + prenomEtudiant)
})

app.get('/exempleParams/:idEleve', (requete, resultat, next) => {
    const nomE = requete.params.idEleve
    resultat.send('Bonjour mr  ' + nomE )
})

app.get('/exempleParams/valeurs/:value', (requete, resultat, next) => {


    valeur = requete.params.value

    if(isNaN(valeur))

        resultat.send("Le paramètre est éronné")

    else

        resultat.send("La valeur est : " + valeur)


})


app.listen(3000, () =>{
    console.log('Serveur en écoute sur http://localhost:3000/')
})