const express =require ('express')
const app = express()

const port = 3000

app.use(express.json())

app.get('/', (req,res)=>{
    res.status(200)
    .send('video app')
})

app.listen(port,()=>{
    console.log(`server running at ${port}`);
})