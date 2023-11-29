const express=require("express")
const {connection}=require("./db")
const cors=require("cors")
const {userRouter}=require("./routes/user.routes")

const app=express()
app.use(express.json())
app.use(cors())
app.use("/users",userRouter)

app.listen(8080,async()=>{
    try{
        await connection
        console.log("Connected to DB")
        console.log("Server is running at port 8080")
    } catch(err){
        console.log(err)
    }
})