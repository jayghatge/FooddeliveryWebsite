import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://jayghatge4:jagnjr10@cluster0.xnqa6mt.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}