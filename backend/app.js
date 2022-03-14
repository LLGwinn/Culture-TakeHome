"use strict"
/** Backend for Culture Take Home Project 
 * 
 *  Queries for culture_biosciences database.
*/

const express = require('express');
const cors = require("cors");
const app = express();
const db = require('./db');

app.use(cors());
app.use(express.json())

const PAGE_SIZE = 40;

// Add Access Control Allow Origin headers
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// ROUTES

app.get('/images/all', async function(req, res) {
    const {lastValue} = req.query;
    try {
        const result = await db.query(
                    `SELECT * 
                    FROM pictures
                    WHERE pic_url > '${lastValue}'
                    ORDER BY pic_url
                    LIMIT ${PAGE_SIZE}`
                    ) 
        return res.send(result.rows);
    } catch (err) {
        console.log(err);
    }

})

app.get('/images/foaming', async function(req, res) {
    const lastValue = req.query;
    try {
        const result = await db.query(
                    `SELECT * 
                    FROM pictures
                    WHERE pic_url > '${lastValue}'
                        AND is_foaming=true
                    ORDER BY pic_url
                    LIMIT ${PAGE_SIZE}`
                    ) 
        return res.send(result.rows);
    } catch (err) {
        console.log(err);
    }

})

app.get('/images/nonfoaming', async function(req, res) {
    const lastValue = req.query;
    try {
        const result = await db.query(
                    `SELECT * 
                    FROM pictures
                    WHERE pic_url > '${lastValue}'
                        AND is_foaming=false
                    ORDER BY pic_url
                    LIMIT ${PAGE_SIZE}`
                    ) 
        return res.send(result.rows);
    } catch (err) {
        console.log(err);
    }

})

app.put('/images/update', cors(), async function(req, res) {
    const {url} = req.query;
    const {isFoaming} = req.body;
    const date = new Date().toISOString();

    try {
        const result = await db.query(
            `UPDATE pictures 
             SET is_foaming=${isFoaming}, last_modified='${date}'
             WHERE pic_url='${url}'
             RETURNING pic_url, is_foaming`
        );
        return res.send(result.rows);
    } catch(err) {
        console.log(err);
    }
})


app.listen(3000, () => console.log("Running on Port 3000"));



