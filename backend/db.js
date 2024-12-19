import mongoose from "mongoose";

const connecttoDB = async () => {
    try{

        await mongoose.connect(process.env.MONGO_URI);

        console.log("connected to DB");

    }catch(err){
        console.log(err); 
    }
}

export default connecttoDB