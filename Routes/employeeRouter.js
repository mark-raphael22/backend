const express = require('express');
const router = express.Router()
const{
    getEmployees,
    getSingleEmployees,
    createEmployee ,
    updateEmployee,
    deleteEmployee
}= require("../controller/employeeController")


 //order method
//router.route("/employees").get(getEmployees).post(createEmployee)
//router.route("/employees/:id").get(getSingleEmployees).patch(updateEmployee)
//.delete(deleteEmployee)

router.get('/employees',getEmployees);
router.post("/employees",createEmployee);
router.get('/employees/:id',getSingleEmployees);
router.delete("/employees/:id",deleteEmployee);
router.patch("/employees/:id",updateEmployee)

module.exports = router