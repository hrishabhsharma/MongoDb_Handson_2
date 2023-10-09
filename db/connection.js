const { MongoClient } = require("mongodb")

const uri = "mongodb+srv://sharma17h:7509359202@cluster0.icjntaq.mongodb.net/"

const client = new MongoClient(uri)

module.exports = client