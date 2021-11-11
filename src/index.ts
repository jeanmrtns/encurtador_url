import express from 'express';
import { URLController } from './controller/urlcontroller';
import { MongoConnection } from './database/MongoConnection';

const app = express();
app.use(express.json());

const db = new MongoConnection();
db.connect();

const urlController = new URLController();
app.post('/shorter', urlController.shorter);
app.get('/:hash', urlController.redirect);

app.listen(5000, () => {
    console.log('Server running on port 5000');
});