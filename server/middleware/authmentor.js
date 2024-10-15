import jwt from "jsonwebtoken"

const authmentor=(req,res,next)=>{
    try {
        const token =req.headers.authorization.split(" ")[1];
        let decodedata=jwt.verify(token,process.env.JWT_SECRET)
        req.mentorid=decodedata?.id;
        next();
    } catch (error) {
        console.log(error)
    }
}
export default authmentor;