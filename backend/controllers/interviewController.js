import fs from "fs";

export const analyzeResume = async(req,res)=>{
    try {
        if(!req.file){
            return res.status(400).json({message:"Resume required"});
        }
        const filePath = req.file.path; // file will stored in public folder
        const fileBuffer = await fs.promises.readFile(filePath);
        


    } catch (error) {
        
    }
}