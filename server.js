// /* 
// when ever you open backend code at the first time then 
// 1.run npm init 
// 2. create server.js file
// 3. npm i express
// */
// var csv=require('csv-parser');
// var fs=require('fs');
// var filePath=process.cwd()+"/uploads/";
// var results=[];
// var jsonData;
// fs.createReadStream(filePath+'pankaj.csv').pipe(csv()).on('data',(data)=>{
// results.push(data)

// }).on('end',()=>{
//     // console.log(results)
//     var filedata;
//     fs.readFile(filePath+'demo_sample4.json','utf-8',function(err,data){
//         if(err) throw err
//         jsonData=JSON.parse(data)
//      var filterdata=  jsonData.result.filter(item=>{
//        return  results.some(ele =>{
//            //  console.log(item['Diagnosis ICD'],"Diagnosis ICD")
//             //    console.log(ele.ICD,"ICD")
//            return     ele.ICD ==item['Diagnosis ICD'] && ele.Confidence == item['Bill Details'][0]['Confidence Score']
//             })
//        })
//        console.log(filterdata,"filterdata")
//     })
   
   
//     console.log("file read successfully")
// })


const express=require('express');
const mongoose=require('mongoose')
const app=express();
const PORT=3000;
const route=require('./routes/routes')
var bodyparser=require('body-parser')
var cors=require('cors');
mongoose.connect('mongodb://localhost:27017/registerdata',{ useNewUrlParser: true },(err)=>{
    if(err) throw err
    console.log('connected to db')
})
app.use(cors())
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}))
app.use(route);
app.listen(PORT,(err)=>{
    if(err) throw err
    console.log("server connected to port "+PORT)
})






































































