const property=require("../models/model")
const auth=require("../models/auth")


//// Authentication ///////////

const signup=async(req,res)=>{
    const data=await auth(req.body)
    try {
        const already_exist=await auth.findOne({
            email:req.body.email
        })
        if(already_exist){
            res.json("email already exist")
        }
        else{
            data.save()
            res.json("sign up successfuly")
        }
    } catch (error) {
        res.json("failed to sign-up")
    }
}

const login=async(req,res)=>{
    
    try {
        const match=await auth.findOne({
            email:req.body.email,
            password:req.body.password
        })
        if(match){
            res.json({message:"login successful",match})
        }
        else{

            res.json("credentials does not match")
            
        }
    } catch (error) {
        res.json("failed to login")
    }
}

///////////////////////////////////////////////////////////////////
const create_data_in_API = async (req, res)=>{
    try {
        const text =new property({
            city: req.body.city,
            location: req.body.location,
            size: req.body.size,
            price: req.body.price,
        })
        const val= await text.save()
        res.status(200).json(val)
        
    } catch (error) {
        res.status(500).send(error)
    }

} 
const read_data= async (req,res)=>{
    try {
        const val=await property.find()
        res.json(val)
    } catch (error) {
        res.send(error)
    }
}

const update_data= async (req,res)=>{
    try {
        var data=await property.findByIdAndUpdate(req.params.id,{
            name: req.body.name,
            email: req.body.email,
            city: req.body.city,
        })
        const a=await data()
        res.json(a)
    } catch (error) {
        res.send(error)
    }
}

const delete_data= async(req,res)=>{
    
    try {
        const data = await property.findByIdAndDelete(req.params.id)
        const a=await data()
        res.json(a)
        
    } catch (error) {
        res.json("id not found")
    }
} 


const edit_data=async(req,res)=>{
    
    try {
        const data = await property.findById(req.params.id)
        
        res.json(data)
        
    } catch (error) {
        res.json("id not found")
    }
} 

module.exports={create_data_in_API,read_data,update_data,delete_data,edit_data,signup,login}