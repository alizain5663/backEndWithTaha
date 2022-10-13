const express = require('express');
const routes =express.Router();
const {userData}=require('../controllers/formController');
routes.post('/userdata',userData);
module.exports=routes;

