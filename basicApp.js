import express, { json } from 'express'


// import { console } from 'node:inspector';

let uid=0;


const app=express();

app.use(express.json());
const PORT=5050;

class User{
     users={
    
    };
    length=0;

    getAllUser(){
        return this.length && this.users;
    }

    getUser(id){
        const user =this.users[`${id}`];
        return user&&user;
    }
    
    putUser(newUser,id){

        const user=this.users[`${id}`];
        const result=user&&(this.users[`${id}`]=newUser)&&true;
        return result;
        
    }

    postUser(user){
        this.users[`${uid}`]=user;
        uid++;
        this.length++;
        return true;
    }

    deleteUser(id){
       const user= this.users[`${id}`];
       const result=user &&(delete this.users[`${id}`])&&true;
       this.length--;
       return result;
    }


}

const users=new User();


app.get("/",(req,res)=>{
    const allUser=users.getAllUser();
    if(allUser){
       return res.send(allUser);
    }
    res.json(allUser);
})

app.get("/:id",(req,res)=>{
    
    const {id}=req.params;
    const user=users.getUser(id);
    console.log(user);
    res.json(user);
})

app.post("/",(req,res)=>{
    const result=users.postUser(req.body);
    res.send(result);
})

app.put("/:id",(req,res)=>{

    const {id}=req.params;
    const result=users.putUser(req.body,id);
    res.send(result);
})

app.delete("/:id",(req,res)=>{
    const {id}=req.params;
    const result=users.deleteUser(id);
    res.send(result);
    
})

app.listen(PORT,()=>{
    console.log(`Server is listening ${PORT}`);
});