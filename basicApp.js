import express from 'express'

let uid=0;


const app=express();

app.use(express.json());
const PORT=5050;

class Anime{
     animes={
    
    };
    length=0;

    getAllUser(){
        return this.length && this.animes;
    }

    getUser(id){
        const user =this.animes[`${id}`];
        return user&&user;
    }
    
    putUser(body,id){
         const{name="",mangaWriter="",studio="",rating=0}=body||{};
         let newAnime={
            name:name,
            mangaWriter:mangaWriter,
            studio:studio,
            rating:rating,
        }
        const Isanime=this.animes[`${id}`];
        const result=Isanime&&(this.animes[`${id}`]=newAnime)&&true;
        return result;
        
    }

    postUser(body){
        const{name="",mangaWriter="",studio="",rating=0}=body||{};

       

        let newAnime={
            name:name,
            mangaWriter:mangaWriter,
            studio:studio,
            rating:rating,
        }
        this.animes[`${uid}`]=newAnime;
        uid++;
        this.length++;
        return true;
    }

    deleteUser(id){
       const anime= this.animes[`${id}`];
       const result=anime &&(delete this.animes[`${id}`])&&true;
       this.length--;
       return result;
    }

    patchUser(body,id){
        let anime=this.animes[`${id}`];

        if(anime){
            for(let key in body){
                anime[key]=body[key];
            }
            return true;
        }

        return false;


      
        

    }


}

const anime=new Anime();


app.get("/",(req,res)=>{
    const allUser=anime.getAllUser();
    if(allUser){
       return res.send(allUser);
    }
    res.json(allUser);
})

app.get("/:id",(req,res)=>{
    
    const {id}=req.params;
    const user=anime.getUser(id);
    res.json(user);
})

app.post("/",(req,res)=>{

    
    const result=anime.postUser(req.body);
    
    res.send(result);
})

app.put("/:id",(req,res)=>{

    const {id}=req.params;
    const result=anime.putUser(req.body,id);
    res.send(result);
})

app.patch("/:id",(req,res)=>{
    const {id}=req.params;
    const result=anime.patchUser(req.body,id);
    res.send(result);
})

app.delete("/:id",(req,res)=>{
    const {id}=req.params;
    const result=anime.deleteUser(id);
    // console.log(req.body);
    res.send(result);
    
})

app.listen(PORT,()=>{
    console.log(`Server is listening ${PORT}`);

});
   







// import express from "express";

// const app = express();
// app.use(express.json());

// const PORT = 5050;

// /* =========================
//    Global State
// ========================= */
// let uid = 0;
// let length = 0;

// const users = {};

// /* =========================
//    Global Functions
// ========================= */

// function getAllUsers() {
//   if (length > 0) {
//     return users;
//   } else {
//     return false;
//   }
// }

// function getUser(id) {
//   if (users[id]) {
//     return users[id];
//   } else {
//     return false;
//   }
// }

// function postUser(user) {
//   users[uid] = user;
//   uid++;
//   length++;
//   return true;
// }

// function putUser(id, newUser) {
//   if (users[id]) {
//     users[id] = newUser;
//     return true;
//   } else {
//     return false;
//   }
// }

// function deleteUser(id) {
//   if (users[id]) {
//     delete users[id];
//     length--;
//     return true;
//   } else {
//     return false;
//   }
// }

// /* =========================
//    Routes
// ========================= */

// app.get("/", (req, res) => {
//   const allUsers = getAllUsers();

//   if (allUsers) {
//     res.send(allUsers);
//   } else if (allUsers === false) {
//     res.send(false);
//   } else {
//     res.send(false);
//   }
// });

// app.get("/:id", (req, res) => {
//   const { id } = req.params;
//   const user = getUser(id);

//   if (user) {
//     res.json(user);
//   } else {
//     res.json(false);
//   }
// });

// app.post("/", (req, res) => {
//   const result = postUser(req.body);

//   if (result) {
//     res.send(true);
//   } else {
//     res.send(false);
//   }
// });

// app.put("/:id", (req, res) => {
//   const { id } = req.params;
//   const result = putUser(id, req.body);

//   if (result) {
//     res.send(true);
//   } else {
//     res.send(false);
//   }
// });

// app.delete("/:id", (req, res) => {
//   const { id } = req.params;
//   const result = deleteUser(id);

//   if (result) {
//     res.send(true);
//   } else {
//     res.send(false);
//   }
// });

// /* =========================
//    Server
// ========================= */

// app.listen(PORT, () => {
//   console.log(`Server is listening on ${PORT}`);
// });
