import {createRequire} from "module" // Necessaire pour import ES6 vs require (CommonJS)
const require = createRequire(import.meta.url) // Necessaire pour import ES6 vs require (CommonJS)
import {listeEleves} from "./sources/eleves.mjs";

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

const path = require('path')

import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);

app.get('/', (requete, resultat) =>

{
    resultat.send("Bonjour");
})

app.get('/api/leseleves', (requete, resultat) => {
    const listePartielle = listeEleves.map(eleve => {
        return {nomEleve : eleve.nom, prenomEleve : eleve.prenom};
    })
    resultat.json(listePartielle)
})

app.post('/testPost', (requete, resultat) =>{
    let donnesRecues = requete.body;
    resultat.send('Données reçues : ' + JSON.stringify(donnesRecues))
})

app.get('/login', (requete, resultat) =>{
    resultat.sendFile(path.join(__dirname + '/login.html'));
})

app.post('/login', (requete, resultat) =>  {
    const identifiant = requete.body.pseudo;
    const motDePasse = requete.body.motDePasse;
    const nom = requete.body.nom;
    const prenom = requete.body.prenom;

    identifiant === 'admin' && motDePasse === 'admin' ? resultat.send('Bonjour l\'administrateur') : resultat.send('Bonjour ' + identifiant + ", vous êtes Mr/Mme " + nom + " " + prenom)

})

app.get('/api/leseleves/:nomEleve', (requete, resultat) => {

    const nomEleveEntree = requete.params.nomEleve

    const found = listeEleves.find((elementTableau) => elementTableau.nom === nomEleveEntree || elementTableau.nom.includes(nomEleveEntree))
    if (found)
        resultat.send("L'élève " + found.nom + " existe. Son prénom est " + found.prenom + " et il a " + found.age + " ans")
    else
        resultat.send("L'élève " + nomEleveEntree + " n'a pas été trouvé")

})

app.get('/chercheParNomEtPrenom/:nomEleve/:prenomEleve', (requete, resultat) =>
{
    const trouveNomEtPrenom = listeEleves.find(eleve=>(eleve.nom === requete.params.nomEleve && eleve.prenom === requete.params.prenomEleve))
    resultat.json(trouveNomEtPrenom)
})

app.get('/nvRoute/chercheParNomEtPrenom/:nomEleve/:prenomEleve', (requete, resultat) =>{

    console.log(requete.params.nomEleve)
    console.log(requete.params.prenomEleve)

    const elevesTrouves = listeEleves.find(eleve=>(eleve.nom === requete.params.nomEleve || eleve.prenom === requete.params.prenomEleve))
    if (elevesTrouves)
        resultat.json(elevesTrouves)
    else
        resultat.status('404').send('Etudiant pas trouvé')
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


    const valeur = requete.params.value

    if(isNaN(valeur))

        resultat.send("Le paramètre est érroné")

    else

        resultat.send("La valeur est : " + valeur)


})


app.listen(3000, () =>{
    console.log('Serveur en écoute sur http://localhost:3000/')
})