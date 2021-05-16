import { ingredientValidations, validate, Ingredient } from './types';

import express, { Request, Response }  from 'express';
import { Collection, Db, MongoClient } from 'mongodb';


const PORT = process.env.SERVER_PORT || 8000;
const DB_URI = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@mongo:27017`
const MONGO_OPTIONS = { poolSize: 10, bufferMaxEntries: 0,  useNewUrlParser: true, useUnifiedTopology: true }
const MAIN_COLLECTION = 'ingredients';
const DB_NAME = 'kitchen-buddy-db';


const app = express();
const mongo = MongoClient;

// express config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// TODO: endpoints to create
// - domain.com/api/expire-in?delta=<days>
// - domain.com/api/expire-soon
// - domain.com/api/missing?field=<field-name-1>[,<field-name-2>,...,<field-name-n>] (optionally all)
// - domain.com/api/having?field=<field-name-1>[,<field-name-2>,...,<field-name-n>] (optionally all)
// - domain.com/api/recently-added?delta=<days>
// - domain.com/api/field/[?category=<category-type>[&location=<location-type>[&confection=<confection-type>]]]



app.get('/hello', (req: Request, res: Response) => {
    console.log(`Request from: ${req.hostname}`);
    res.send({ message: 'Hello from kitchen-buddy-api' });
});

app.get('/ingredients', (req: Request, res: Response) => {
    const db: Db = req.app.locals.db;
    db.collection(MAIN_COLLECTION).find().toArray().then((array: Ingredient[]) => {
        const names: string = array.map((ingredient: Ingredient) => ingredient.name).toString();
        console.log(`Selected ingredients: [${names}]`);
        res.send(array);
    }).catch(console.error);
});

app.post('/ingredients', validate(ingredientValidations), (req: Request, res: Response) => {
    const db: Db = req.app.locals.db;
    const ingredient: Ingredient = req.body;

    db.collection(MAIN_COLLECTION).insertOne(ingredient).then(() =>{
        console.log(`Ingredient '${ingredient.name}' inserted`);
        res.send(ingredient);
    }).catch(console.error);
});

mongo.connect(DB_URI, MONGO_OPTIONS).then((client: MongoClient) => {
    const db: Db = client.db(DB_NAME);
    db.listCollections({'name': MAIN_COLLECTION}).toArray().then(res => res.length).then(len => {
        if (len === 0) {
            db.createCollection(MAIN_COLLECTION).then((collection: Collection) => {
                console.log(`Collection '${MAIN_COLLECTION}' created!`);
            }).catch(console.error);
        } else {
            console.log(`Collection '${MAIN_COLLECTION}' already exist...`);
        }
    });

    app.locals.db = db;
    app.listen(PORT, () => {
        console.log(`App is listening on port ${PORT}...`);
        console.log(`Configured database connection...: ${DB_URI}`);
    });
}).catch(console.error);

