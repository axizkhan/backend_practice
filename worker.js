import {parentPort} from "node:worker_threads"
   
parentPort.on("message",(time)=>{
    function timer(){
        const startTime=new Date();
        const waitTime=1000*time;
        while(new Date()-startTime<waitTime){}
        // console.log("")
       
    }
     timer();
     parentPort.postMessage("done");
})