import postmessage from "../models/postmessage.js";


export const getpost=async (req,res)=>{
   try{
    const postmessage= await postmessage.find();
    res.status(200).json(postmessage);
   }catch(error){
    res.status(404).json({message: error.message});
   }
    }
export const createpost=async (req,res)=>{
        const post=req.body;
        const newpost=new postmessage(post);
        try{
            await newpost.save();
            res.status(201).json(newpost);
           }catch(error){
            res.status(409).json({message: error.message});
           }
        }