const express = require('express')
const expressQL = require('express-graphql');
const app = express()
const routes = express.Router()

routes.get("/", function(req, res){
    res.send('teste')
});




module.exports  = routes