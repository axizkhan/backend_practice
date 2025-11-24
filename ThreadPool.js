import {Worker} from "node:worker_threads"
export class ThreadPool{
    constructor(size,fileName){
        this.majdor=[];
        this.kaam=[];

        for(let i=0;i<size;i++){
            const worker=new Worker(fileName);
            this.majdor.push(worker);
            worker.isBusy=false;
            
            worker.on("message",(result)=>{
                worker.isBusy=false;
                worker.resolve(result);

                if(this.kaam.length>0){
                    const majdori=this.kaam.shift();
                    this.run(majdori.data).then((result)=>majdori.resolve(result));   
                }

            })
        }

    }
    run(data){
        return new Promise(resolve=>{
            const KhaliMajdor=this.majdor.find(m=>!m.isBusy);

        if(KhaliMajdor){
            KhaliMajdor.isBusy=true;
            KhaliMajdor.resolve=resolve
            KhaliMajdor.postMessage(data);
        }else{
            this.kaam.push({data,resolve});
        }
        })
    }
}