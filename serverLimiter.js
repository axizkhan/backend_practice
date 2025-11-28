import express from 'express'
import {Worker} from "node:worker_threads";
import { ThreadPool } from './ThreadPool.js';


const app=express();

const threadPool=new ThreadPool(50,"./worker.js")


app.get("/",async (req,res)=>{
 
   const result=await threadPool.run(10);
   res.send(result);
     
    
    // console.log(new Date().getHours(),":",new Date().getMinutes(),new Date().getSeconds(),new Date().getMilliseconds(),"arival time");
    // setTimeout(()=>{
    //     console.log(new Date().getHours(),":",new Date().getMinutes(),new Date().getSeconds(),new Date().getMilliseconds(),"reposnse sending time");
    //     res.send("Your Web Page");
    // },5000);

})

app.listen(5050,()=>{
    console.log("listining to port 5050");
})
