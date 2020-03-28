var express=require('express')
var router=express.Router()
var registerFile=require('../controllers/register');

router.post('/registerdata',registerFile.register);
router.get('/getData',registerFile.getData);
router.post('/login',registerFile.login)

module.exports=router;