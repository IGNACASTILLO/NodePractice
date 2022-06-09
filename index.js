const express = require("express")
const app = express()
const port = 5000;

app.use(express.json())

let notes =[
    {
        id: 1,
        name: "name1",
        content:"noteContent"
    },{
        id:2,
        name: "name2",
        content:"noteContent"
    },{
        id:3,
        name: "name3",
        content:"noteContent"
    }
]

app.get("/",(req,res)=>{
    res.end("BIIEENVENIO ALIMAIA")
})

app.get("/app/notes",(req,res)=>{
    res.send(notes)
})

app.get("/app/notes/:id",(req,res)=>{
    const id = parseInt(req.params.id)
    const note = notes.find(note=> note.id===id)
    res.json(note)
})

app.delete("/app/notes/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    notes = notes.filter(note=> note.id != id)
})

app.post("/app/notes",(req,res)=>{
 const note = req.body;
 const ids = notes.map(note=> note.id);
 const maxId =  Math.max(...ids);

 const newNote={
     id: maxId+1,
     name: "new name",
     content: note.content
    
 }

 notes = [...notes,newNote]
 res.send(newNote)
})


app.listen(port,()=> console.log("funcionando"))