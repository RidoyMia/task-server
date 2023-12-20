import express, {Request,Response, Application, response ,NextFunction} from "express"
import cors from "cors"
const app:Application = express()

app.use(express())
app.use(cors())
app.use(express.urlencoded({ extended : true}))




app.get('/',(req,res)=>{
    res.status(200).send({
        data : true,
        result : []
    })
})

app.use((error:any,req:Request,res:Response,next:NextFunction)=>{
    const name = error.name;
    const message = error.message;
    res.status(400).send({
        message,
        name
    })
})

export default app;