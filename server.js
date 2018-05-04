import express from 'express';
import { MongoClient } from 'mongodb';
import bodyParser from 'body-parser';

import routes from './app/routes';

const app = express();
const port = '3030';

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port , () => {
    console.log(`escuchando en el puerto ${port}`);
});

routes(app, {});