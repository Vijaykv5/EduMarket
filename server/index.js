const express=require('express');
const app =express();
const cors=require('cors')
const PORT=8080;

app.use(cors())

app.get('/hello',(res,req)=>{
    req.send('hello')
})
app.listen(PORT)