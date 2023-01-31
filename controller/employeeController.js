
const Employees = require("../models/employee")


//get all employees
const getEmployees = (req,res)=>{
  Employees.find().then((data)=>{
    //res.status(200).json({data})
    res.status(200).render("index",{employees:data})
  })
  .catch((err)=>console.error(err))
}


//get a single employee /employees/:id
const getSingleEmployees = (req,res)=>{
    const {id} =req.params
    Employees.findById({_id:id}).then((data)=>{
        // res.status(200).json({data})
        res.status(200).render("details",{employee:data})
    })
    .catch((err)=>console.error(err))
}


//create a new employee /employees
const createEmployee = (req,res)=>{
  const {name,role, age}=req.body
  console.log(req.body);
    const employee = new Employees(req.body)
    employee.save().then((data)=>{
       // res.status(201).json({msg:"employee created",data})
       res.redirect("/employees")
    })
    .catch((err)=>{
        console.log(err);
    });


}

//update an   employee /employees/:id
const updateEmployee = (req,res)=>{
   const {id}= req.params 
   Employees.findByIdAndUpdate({_id:id}, req.body,{new:true,runValidators:true,}).then((data)=>{
  res.status(200).json({msg:"employee updated successfully", data})
   })
   .catch((err)=> { 
console.log(err);
   })
}

//delete an employee /employees/:id
//findByIdanddelete
const deleteEmployee =(req,res)=>{
const {id} = req.params
Employees.findByIdAndDelete({_id:id}).then((data)=>{
     res.status(200).json({redirect:"/employees"})
})
.catch((err)=>{
    console.log(err);
})
}
module.exports ={
    getEmployees,
    getSingleEmployees,
    createEmployee ,
    updateEmployee,
    deleteEmployee
}