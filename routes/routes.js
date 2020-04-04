var express=require('express')
var router=express.Router()
var registerFile=require('../controllers/register');

router.post('/registerdata',registerFile.register);
router.get('/getData',registerFile.getData);
router.post('/login',registerFile.login)
router.post('/update',registerFile.update)
router.post('/delete',registerFile.deleteData)

module.exports=router;