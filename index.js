const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;
// Initialize application
const app = express()





// Listen
app.listen(PORT, ()=>{
    console(`Server running at ${PORT}`)
})