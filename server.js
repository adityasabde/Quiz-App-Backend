import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';
import router from './router/route.js';
import connect from './database/conn.js';





const app = express();

// APPLICATION PORT 
const PORT = process.env.PORT || 8080;

// app middleware 
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());



// routes 
app.use("/api" , router); // api's 

app.get("/" , (req ,res)=>{
    try{
        res.json("get request");
    }
    catch(error){
        res.json(error);
    }
})

connect().then(() =>{
    try{
        app.listen(PORT , ()=>{
            console.log(`server is connected to http://localhost:${PORT}`);
        })
    }
    catch(error){
        console.log("someting happen in db connection");
    }
}
).catch(eror =>{
    console.log("wrong error");
})

