import mongoose from 'mongoose';
let isConnected: boolean = false;

export const connectToDatabase = async()=>{
    mongoose.set('strictQuery', true)
}
