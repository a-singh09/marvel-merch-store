import mongoose from 'mongoose'

require('dotenv').config();
// aa lines chat gpt ch paa ke check karaange
const connectDB = (handler) => async (req, res) =>{

    if (mongoose.connections[0].readyState) {
        return handler(req, res)
    }

    await mongoose.connect(process.env.MONGO_URI)
    return handler(req, res)
}

export default connectDB