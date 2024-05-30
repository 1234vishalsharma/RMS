const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());


app.get('/' , (req,res)=>{
    console.log("Hello World!");
})

app.listen(PORT , ()=>{
    console.log("App is listening on PORT " , PORT);
})