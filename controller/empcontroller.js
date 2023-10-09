const client = require("../db/connection")
const db = client.db("Human_Resource")
const collection = db.collection("employee")

const listalluser = async (req,res) => {
    try{
        const result = await collection.find().toArray()
        res.status(200).send({msg:"data inserted",result:result})
    } catch (e) {
        res.status(500).send("error occured",e)
    }
}

const findusers = async (req,res) => {
    try{
        const id = req.params.ques;
        let ques;
        switch (id) {
            case "1":
                ques = {salary:{$gt:"30000"}};
                break;
            case "2":
                ques = {overallExp:{$gt:"2"}};
                break;
            case "3":
                ques = {yearGrad:{$gt:"2015"},overallExp:{$gt:"1"}};
                break;
        }
        if(ques){
            const result = await collection.find(ques).toArray()
            return res.status(200).send({msg:"data found",result:result})
        }
       return res.status(200).send({msg:"You put wrong param"})
    } catch (e) {
        res.status(500).send("error occured",e)
    }
}

const updateuser = async (req,res) => {
    try{
        const result = await collection.updateMany({salary:{$gt:"70000"}},{$set:{salary:"65000"}}).toArray()
        console.log(result)
        res.status(200).send({msg:"data updated",result:result})
    } catch (e) {
        res.status(500).send("error occured",e)
    }
}

const deleteuser = async (req,res) => {
    try{
        const result = await collection.deleteMany({lastCompany:"Y"}).toArray()
        console.log(result)
        res.status(200).send({msg:"data inserted",result:result})
    } catch (e) {
        res.status(500).send("error occured",e)
    }
}

module.exports = { listalluser , findusers , updateuser ,deleteuser }