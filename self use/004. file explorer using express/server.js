const express=require ('express');
const app=express ();
const fs = require('fs');
const cors=require ('cors')

app.use (express.static ('./movies2'));
app.use (express.json ());
app.use(cors());

app.post('/', (req, res) => {
    const allContents = fs.readdirSync(req.body.url);
    res.json(allContents);
    // console.log(req.body);
    // res.json ('helo');
  });

app.listen (3000, ()=> {
    console.log('server started');
});



