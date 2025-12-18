import express from 'express'

// import { console } from 'node:inspector';


const app=express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // (for JSON requests)

// middleware for plain text
app.use(express.text());





app.post("/",async (req,res)=>{
 
 
     let chunks = [];
     console.log(req.body);

  req.on('data', chunk => {chunks.push(chunk)
    // console.log(chunk);

  });
  req.on('end', () => {
    const buffer = Buffer.concat(chunks);
    console.log(buffer);

    // process buffer
  
  });
  

     
    

      res.send('OK');

});

app.listen(5050,()=>{
    console.log("listining to port 5050");
})
