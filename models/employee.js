const mongoose= require('mongoose')
const Schema = mongoose.Schema

//forv each employee we want that (name, age roles, level,
//const employeeSchema = new schema({})
//timestamp Tell us whemn a data was created  AND updated

const employeeSchema = new Schema({
        name:{
            type:String,
            required:true,
            
        },
       role: {
    type:String,
    required:true,
        },

        age:{
            type:Number,
            required:true,
        },
},{timestamps:true})


module.exports = mongoose.model("Employee", employeeSchema)