const express = require('express');
const app = express();
const mongoose = require('mongoose');



let PORT = process.env.PORT;
if (PORT == null || PORT == "") {
    PORT = 8000;
}



app.get('/', (req, res) => {    
    mongoose.connect('mongodb://mukesh:manan%401990@ds255917.mlab.com:55917/practicse', { useNewUrlParser: true }).then(()=>{
        res.send("My First Heroku Deployment with mongoose");
    });
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});