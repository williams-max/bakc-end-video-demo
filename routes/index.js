const express = require("express");
const router = express.Router();
const fs = require('fs');
//const { translate } = require('free-translate');
const translate = require('translate-google')
'use strict';






var texto = " ";


function routes(app) {

    router.get('/', async (req, res) => {  
        res.send("funciona");
    });

    router.get('/get-cont-view', async (req, res) => {
        let rawdata = fs.readFileSync('data/contView.json');
        let contview = JSON.parse(rawdata);
        //console.log(student);
        res.send(contview);

    });

    router.post('/set-cont-view', async (req, res) => {
        console.log("recip ",req.body)
        const contnumber = req.body.contnumber;
        console.log("dato recibido ", contnumber)
        const dato = {
            contview: Number(contnumber)
        }
        fs.writeFileSync('data/contView.json', JSON.stringify(dato));
        res.send(contnumber.toString());
    });

    router.get('/get-time-view', async (req, res) => {
        let rawdata = fs.readFileSync('data/timeView.json');
        let conttime = JSON.parse(rawdata);
        //console.log(student);
        res.send(conttime);

    });

    router.post('/set-time-view', async (req, res) => {
        const timenumber = req.body.timenumber;
        console.log("dato recibido ", timenumber)
        
        const dato = {
            contview: Number(timenumber)
        }
        fs.writeFileSync('data/timeView.json', JSON.stringify(dato));
        res.send(timenumber.toString());
    });




    router.get("/movies/:id", (req, res) => {
        return app.render(req, res, "/movies", { id: req.params.id });
    });

    return router;
};

module.exports = routes;