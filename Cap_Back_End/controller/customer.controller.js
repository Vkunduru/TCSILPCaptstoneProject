const { request, response } = require("express");
const { model } = require("mongoose");
let customerModel = require("../model/customer.model")

let updateCustInfo = ((request, response) =>{
    let customerInfo= request.body

    customerModel.findOneAndUpdate({userID:customerInfo.userID},
        {"$set":
            {firstName:customerInfo.firstName,
            lastName:customerInfo.lastName,
            street:customerInfo.street,
            city:customerInfo.city,
            zip:customerInfo.zip,
            phone:customerInfo.phone,
            email:customerInfo.email,
            password:customerInfo.password
            }}).exec(function(err,res){
                if(err){
                    console.log("updateing user error...." + err);
                }else{
                    console.log("user updated...." + res)
                }
            })
});//end of updateCustInfo


let getCustomerInfo=((request,response)=>{
    temp = request.body
     console.log(temp);
    let customerInfo= request.body
    customerModel.find({userID:customerInfo.userID},(err, data)=>{
        console.log(data)
        response.json(data)
    })
})

module.exports= {updateCustInfo, getCustomerInfo}