var express=require('express')
var router=express.Router()
var registerFile=require('../controllers/register');

router.post('/registerdata',registerFile.register);

module.exports=router;