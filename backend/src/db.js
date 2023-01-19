const mongoose = require('mongoose')

const mongoURI = `mongodb://FastyyFood:Ashu1998@ac-h24r6gc-shard-00-00.f2mjdxu.mongodb.net:27017,ac-h24r6gc-shard-00-01.f2mjdxu.mongodb.net:27017,ac-h24r6gc-shard-00-02.f2mjdxu.mongodb.net:27017/FastyyFood?ssl=true&replicaSet=atlas-6j0bj9-shard-0&authSource=admin&retryWrites=true&w=majority` // Customer change url to your db you created in atlas

//const mongoURI = `mongodb://FastyyFood:Ashu1998@ac-olzdzwg-shard-00-00.o0waw9f.mongodb.net:27017,ac-olzdzwg-shard-00-01.o0waw9f.mongodb.net:27017,ac-olzdzwg-shard-00-02.o0waw9f.mongodb.net:27017/FastyyFood?ssl=true&replicaSet=atlas-l82b4t-shard-0&authSource=admin&retryWrites=true&w=majority`

module.exports = function (callback) {
    mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
       
        if (err) console.log("--- this is " + err)
       
        else {
           
            console.log ("connected to mongos")
        
            const foodCollection = await mongoose.connection.db.collection("food_items");
            foodCollection.find({}).toArray(async function (err, data) {
                const categoryCollection = await mongoose.connection.db.collection("Categories");
                categoryCollection.find({}).toArray(async function (err, Catdata) {
                    callback(err, data, Catdata);

                })
            });
           
        }
    })
};
