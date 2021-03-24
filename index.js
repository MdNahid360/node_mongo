const express = require('express')

const  app = express()
 
// function rootCall(req, res){
//     res.send('Thank you..............')
// // }
 
// const rootCall =(req, res)=>{res.send('Thank you..............')}
app.get('/', (req, res) =>{
    res.send("Thank you for calling me");
})

app.listen(8080, () => console.log('Running 8080 port in localhost'));
