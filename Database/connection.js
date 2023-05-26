import mongoose from "mongoose"

const MongoUrl= "mongodb+srv://nextcrud:nextcrud@cluster0.1nn26xz.mongodb.net/?retryWrites=true&w=majority"

const MongooseConnect = async ()=>{
    try {
        const {connection}= await mongoose.connect(MongoUrl)
        if(connection.readyState==1){
            console.log("Database connected")
        }
    } catch (error) {
        return Promise.reject(error)
    }
}

export default MongooseConnect;