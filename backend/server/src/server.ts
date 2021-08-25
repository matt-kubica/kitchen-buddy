import {ingredientValidations, validate, Ingredient } from './types';

import express, { Request, Response }  from 'express';
import { Collection, Db, MongoClient, ObjectId } from 'mongodb';


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

    db.collection(MAIN_COLLECTION).insertOne(ingredient).then((result) => {
        const completeIngredient = {
            id: result.insertedId,
            name: ingredient.name,
            category: ingredient.category,
            placement: ingredient.placement,
            confection: ingredient.confection,
            expirationDate: ingredient.expirationDate,
            ripenessStatus: ingredient.ripenessStatus,
            open: ingredient.open,
            frozen: ingredient.frozen,
            barcode: ingredient.barcode
        }
        console.log(`Ingredient inserted!`);
        console.log(completeIngredient)
        res.send(completeIngredient);
    }).catch(console.error);
});

app.delete('/ingredients', (req: Request, res: Response) => {
    const db: Db = req.app.locals.db;
    db.collection(MAIN_COLLECTION).deleteMany({ }).then(() => {
        console.log('All ingredients have been deleted!');
        res.send().status(200);
    }).catch(console.error);
});

app.delete('/ingredients/:id', (req: Request, res: Response) => {
    const db: Db = req.app.locals.db;
    const id: string = req.params.id;

    db.collection(MAIN_COLLECTION).deleteOne({ _id: new ObjectId(id) }).then(() => {
        console.log(`Ingredient with id = ${id} have been deleted!`);
        res.send().status(200);
    }).catch(console.error);
});

app.put('/ingredients/:id', (req: Request, res: Response) => {
    const db: Db = req.app.locals.db;
    const id: string = req.params.id;
    const ingredient: Ingredient = req.body;

    db.collection(MAIN_COLLECTION).replaceOne({ _id: new ObjectId(id) }, ingredient).then(() => {
        console.log(`Ingredient with id = ${id} have been updated!`);
        res.send().status(200);
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

