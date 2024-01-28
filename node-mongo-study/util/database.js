const mongodb = require('mongodb');
MongoClient = mongodb.MongoClient;
const DB_NAME = 'gufrandatabase';

let _db;
const mongoConnect = (callback) => {
    MongoClient.connect(
        'mongodb+srv://guffy1267:FAFrDXteBlh2T71y@cluster0.nwfbyqe.mongodb.net/' +
            DB_NAME +
            '?retryWrites=true&w=majority'
    )
        .then((client) => {
            _db = client.db(DB_NAME);

            callback(client);
        })
        .catch((err) => {
            console.log('mongo failed to connect ', err);
        });
};

const getDB = () => {
    if (_db) {
        return _db;
    }
    throw new Error('No MongoDB connection');
};

//module.exports = mongoConnect;

exports.getDB = getDB;
exports.mongoConnect = mongoConnect;
