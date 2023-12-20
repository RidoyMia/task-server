import mongoose from "mongoose";
import app from "./app";

async function bootstrap() {
    try {
        mongoose.connect(`mongodb+srv://task:task@cluster0.7b0q4tk.mongodb.net/?retryWrites=true&w=majority` as string)
    app.listen(4004,()=>{
        console.log(`application is running at 4004`);
    })
        
    } catch (error) {
        
    }
}
bootstrap()