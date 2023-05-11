const mongoose=require("mongoose")
const userSchema=mongoose.Schema({
    city:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    size:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    }
})
module.exports=mongoose.model("property",userSchema)