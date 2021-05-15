const app = require('express')();
const mongo = require('mongodb').MongoClient;

// domain.com/api/expire-in?delta=<days>
// domain.com/api/expire-soon
// domain.com/api/missing?field=<field-name-1>[,<field-name-2>,...,<field-name-n>] (optionally all)
// domain.com/api/having?field=<field-name-1>[,<field-name-2>,...,<field-name-n>] (optionally all)
// domain.com/api/recently-added?delta=<days>
// domain.com/api/field/[?category=<category-type>[&location=<location-type>[&confection=<confection-type>]]]

const PORT = process.env.SERVER_PORT || 8000;
const DB_URI = `mongodb://
    ${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@mongo:27017`


// mongo.connect(DB_URI, (err, connection) => {
//     if (err) throw err;
//
//     const db = connection.db('kitchen-buddy-db');
//     db.createCollection('indegrients', (err, res) => {
//         if (err) throw err;
//         console.log('Collection created!');
//         connection.close();
//     });
//
// });

app.get('/', (req, res) => console.log('HELLNO!'));


app.listen(PORT, () => {
    console.log('App is listening...')
});

