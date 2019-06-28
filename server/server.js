require('dotenv').config();
const express = require('express');
const massive = require('massive');
const app = express();

const {SERVER_PORT, CONNECTION_STRING} = process.env;

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log(`The database is set.`);
    app.listen(SERVER_PORT, () => console.log(`The server is listening on port ${SERVER_PORT}`));
});

