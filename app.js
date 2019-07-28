const express = require('express');
const app = express();

let PORT = process.env.PORT;
if (PORT == null || PORT == "") {
    PORT = 8000;
}

app.get('/', (req, res) => {
    res.send("My First Heroku Deployment");
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});