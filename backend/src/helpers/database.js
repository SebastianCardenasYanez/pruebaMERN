const mongoose = require("mongoose");

const uri = `${process.env.MONGO_PROTOCOL}${process.env.MONGO_USER}:${process.env.MONGO_PWD}@${process.env.MONGO_HOST}/${process.env.MONGO_DB_NAME}?authSource=admin`;
console.log(uri);

mongoose.connect(uri);

const connect = mongoose.connection;

connect.once("open", () => {
    console.log("la base de datos se conecto:", uri);
})