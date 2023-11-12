import mongoose from 'mongoose';

const connect = async () =>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('Successful connection')
    } catch (error) {
        console.log('Failed to connect to MongoDB')
    }
}

export default { connect };