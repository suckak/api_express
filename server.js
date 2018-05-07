import express from 'express';
import { MongoClient } from 'mongodb';
import bodyParser from 'body-parser';

import routes from './app/routes';
import DB_CONFIG from './config/db';

const app = express();
const port = '3030';

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

MongoClient.connect(DB_CONFIG.url, (err, database) => {
    if (err) {
        return console.log(err);
    }
    
    const db = database.db(DB_CONFIG.name);

    routes(app, db);
    app.listen(port, () => {
        console.log(`escuchando en el puerto ${port}`);
    });
})


