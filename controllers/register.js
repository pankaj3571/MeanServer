var registerModel=require('../models/regsiter');

module.exports={

    register:(req,res)=>{
        console.log(req.body,"dhjdgh")
        var registerData=new registerModel({
            name:req.body.username,
            email:req.body.email,
            mob:req.body.mobile
        })

        registerData.save().then(data=>{
            if(!data){
                res.json({success:false,message:"Something Went wrong"})
            }else{
                res.json({success:true,message:"Successfully Saved",data:data})
            }
        }).catch(err=>{
            console.log(err)
        })

    }
}