const mongoose=require("mongoose")

//Blueprint/Schema

const userSchema=mongoose.Schema({
    name: String,
    age: Number,
    city: String,
    isMarried: Boolean
},{
    versionKey:false
})

//model
const UserModel=mongoose.model("user",userSchema)

module.exports={
    UserModel
}