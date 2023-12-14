const express = require ("express")
const mongoose = require ("mongoose")
const bodyParser = require ("body-parser")
const cors = require ("cors")

const app = express()
app.use(bodyParser.json())
app.use(cors())

mongoose.connect("mongodb+srv://shirisha269:akshaya269@cluster0.uhvlnjs.mongodb.net/?retryWrites=true&w=majority",
{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{console.log("mongooseconnected")})
.catch((err) => { console.log(err) })

const TodoSchema = {
    text:String,
    complete:Boolean

}
const Todo = mongoose.model("Todo",TodoSchema)

app.get("/",(req,res)=>{
    res.send("shirisha")
})

app.post("/todos",async(req,res)=>{
   console.log(req.body)
   

   try{
    const todo = new Todo(req.body)
   await todo.save()
   res.json({message:"data is sucess"})
   }
   catch(err){console.log(err)}
  

})


app.listen(5000,()=>{
    console.log("server is running on 5000")
})
