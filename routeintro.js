const express = require('express')
const path = require('path')
const app = express()



app.get('/', (requete, resultat) => {
    //resultat.send('Bonjour aux sio2 slam')
    const options = {
        root : path.join(__dirname, 'public'),
        dotfiles : 'deny',
        headers : {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    }

    const fileName = 'bienvenue.html'
})


app.listen(3000, () =>{
    console.log('Serveur en écoute sur http://localhost:3000/')
})