const express = require('express');
const app = express();

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

app.get('/', (req, res) => {
    res.send("My First Heroku Deployment");
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});