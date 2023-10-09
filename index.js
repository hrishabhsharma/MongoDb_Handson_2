const express = require('express')
const client = require('./db/connection')
const Data = require('./constant/Data')
const emprouting = require('./routes/emprouting')
const app = express()
const port = 8000

const DbConnect = async ()=> {
  try {
    await client.connect()
    console.log("connected to Database")
    // client.db("Human_Resource").collection("employee").insertMany(Data, (err,res) => {
    //               if(err){console.log(err)}
    //               console.log("Data inserted",res)
    //           })
  } catch (e) {
    console.log(e)
  }
}
DbConnect()
app.use("/",emprouting)
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))