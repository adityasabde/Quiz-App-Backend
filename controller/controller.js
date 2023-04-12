import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions, { answers } from '../database/data.js'

/** get all questions */
export async function getQuestions(req, res){
    try {
        const q = await Questions.find();
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}
// insert question
export async function insertQuestions(req ,res){
    try {
        Questions.insertMany({ questions, answers }).then((err, data)=>{
            res.json({ msg: "Data Saved Successfully...!"})
        })
        .catch((error)=>{
            res.json(error);
        })
    } catch (error) {
        res.json({ error })
    }
}


// delete question

export async function deletefunction(req ,res){
    try{
       await  Questions.deleteMany();
       res.json("delete data succesfully ");
    }
    catch(error){
        res.json({error});
    }
}


// get all result 
export async function getResult(req ,res){
    try{
        const r = await Results.find();
        res.json(r);
    }
    catch(error){
        res.json({error});
    }
}
/** post all result */
export async function storeResult(req, res){
    try {
         const { username, result, attempts, points, achived } = req.body;
         if(!username && !result) throw new Error('Data Not Provided...!');
 
         Results.create({ username, result, attempts, points, achived }).then((err, data)=>{
             res.json({ msg : "Result Saved Successfully...!"})
         })
 
    } catch (error) {
         res.json({error})
    }
 }
export async function dropResult(req ,res){
    try{
        await Results.deleteMany();

        res.json("result deleted successfully..............");
    }
    catch(error){
        res.json({error});
    }
}