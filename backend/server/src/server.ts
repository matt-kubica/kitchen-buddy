import { ingredients, Ingredient } from './types';

import express  from 'express';
import { Collection, MongoClient, MongoError } from "mongodb";


const PORT = process.env.SERVER_PORT || 8000;
const DB_URI = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@mongo:27017`
const MONGO_OPTIONS = { poolSize: 10, bufferMaxEntries: 0,  useNewUrlParser: true,useUnifiedTopology: true }
const MAIN_COLLECTION = 'ingredients';
const DB_NAME = 'kitchen-buddy-db';


const app = express();
const mongo = MongoClient;


// TODO: endpoints to create
// - domain.com/api/expire-in?delta=<days>
// - domain.com/api/expire-soon
// - domain.com/api/missing?field=<field-name-1>[,<field-name-2>,...,<field-name-n>] (optionally all)
// - domain.com/api/having?field=<field-name-1>[,<field-name-2>,...,<field-name-n>] (optionally all)
// - domain.com/api/recently-added?delta=<days>
// - domain.com/api/field/[?category=<category-type>[&location=<location-type>[&confection=<confection-type>]]]


mongo.connect(DB_URI, MONGO_OPTIONS,(err: MongoError, client: MongoClient) => {
    if (err) throw err;

    const db = client.db(DB_NAME);
    db.listCollections({'name': MAIN_COLLECTION}).toArray()
        .then(res => res.length)
        .then(len => {
            if (len === 0) {
                db.createCollection(MAIN_COLLECTION, (err: MongoError, collection: Collection) => {
                    if (err) throw err;
                    console.log(`Collection '${MAIN_COLLECTION}' created!`);
                });
            } else {
                console.log(`Collection '${MAIN_COLLECTION}' already exist...`);
            }
        });
});

app.get('/', (req, res) => {
    console.log(`Request from: ${req.hostname}`);
    res.send('Hello from server!');
});


// app.get('/put-dummy-ingredients', (req, res) => {
//     console.log(db);
//     db.collection('ingredients').insertMany(ingredients, (err: MongoError, res: InsertWriteOpResult<WithId<any>>) => {
//         if (err) throw err;
//         console.log('Documents inserted!');
//     });
// })


app.listen(PORT, () => {
    console.log('App is listening...');
    console.log('Database URI: ', DB_URI);
});

