var registerModel=require('../models/regsiter');
var crypto = require('crypto');
var algorithm = 'aes-256-ctr', secret="onlineDemoClass@1234#0001";
var jwt=require('jsonwebtoken')
module.exports={

    register:async(req,res)=>{
        var ab="vgdhgdfhdsgfhsdf"
        console.log(req.body,"dhjdgh",encrypt(ab))
        
        var registerData=new registerModel({
            name:req.body.username,
            email:req.body.email,
            mob:req.body.mobile,
            password:encrypt(req.body.password)
        })

      await registerModel.findOne({name:req.body.username}).select('name').lean().then(data=>{
        //   console.log(data)
        if(!data){
                registerData.save().then(data1=>{
                    if(data1){
                        res.json({status:true,data:data1,message:"data save successfully"})
                    }else{
                        req.json({status:false,message:"something went wrong"})
                    }
                }).catch((err)=>{
                    console.log(err)
                })
        }
        else{
            res.json({message:"username already exist"})
        }
      })

    },
    getData:(req,res)=>{
        registerModel.find().then(data=>{
            if(data){
                res.json({status:true,data:data})
            }else{
                res.json({status:false,message:"Something went wrong"})
            }
        }).catch((err)=>{
            console.log(err)
        })
        
    },

    login:(req,res)=>{
        registerModel.findOne({name: req.body.username}).then(data=>{
           
               
            if(data){
                if(decrypt(data.password)==req.body.password){
                    var token=jwt.sign({_id:data._id},secret,{expiresIn:'1h'})
                    res.json({status:true,token:token})
                }else{
                    res.json({status:false,message:"username and password are not matched"})
                }
            }else{
                res.json({status:false,message:"username not found"})
            }
     
            
        })
      


    }
}

function encrypt(text){
    if(!text||!text.length) return '';
    var cipher = crypto.createCipher(algorithm,secret)
    var crypted = cipher.update(text,'utf8','hex')
    crypted += cipher.final('hex');
    return crypted;
  }



  function decrypt(text){
    if(!text||!text.length) return '';
    var decipher = crypto.createDecipher(algorithm,secret)
    // console.log(text, algorithm, password, '-------', decipher)
    var dec = decipher.update(text,'hex','utf8')
    dec += decipher.final('utf8');
    return dec;
  }
  