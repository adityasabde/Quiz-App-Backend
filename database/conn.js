import mongoose from "mongoose";
// import { config } from 'dotenv';
// const dotenv = require('dotenv')

export default async function connect(){
    await mongoose.connect( "mongodb://sabdeaditya2019:aditya001@ac-hg9nhy1-shard-00-00.qdu4ddg.mongodb.net:27017,ac-hg9nhy1-shard-00-01.qdu4ddg.mongodb.net:27017,ac-hg9nhy1-shard-00-02.qdu4ddg.mongodb.net:27017/?ssl=true&replicaSet=atlas-3cctfn-shard-0&authSource=admin&retryWrites=true&w=majority" , { useNewUrlParser: true}).then(()=>{
        console.log("Database Connected")

    }).catch((error)=>{
        console.log(error);
    })
}