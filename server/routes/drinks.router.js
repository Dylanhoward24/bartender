const { default: axios } = require('axios');
const express = require('express');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
 router.get('/', rejectUnauthenticated, (req, res) => {
    axios({
        method: 'GET',
        url: 'https://the-cocktail-db.p.rapidapi.com/random.php',
        headers: {
            'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com',
            'x-rapidapi-key': process.env.RAPID_API_KEY
        }
    }).then((response) => {
        console.log('response is', response);
        res.send(response.data);
    }).catch((error) => {
        console.log('random drink error', error);
        res.sendStatus(500);
    });
});

module.exports = router;

// const options = {
//     method: 'GET',
//     url: 'https://the-cocktail-db.p.rapidapi.com/random.php',
//     headers: {
//         'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com',
//         'x-rapidapi-key': process.env.RAPID_API_KEY
//     }
// }