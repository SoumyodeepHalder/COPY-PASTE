const express=require ('express');
const app=express ();

app.use (express.static ('public'));

app.get('/public/:filename', (req, res) => {
    const filename = decodeURIComponent(req.params.filename);
    const filePath = path.join(__dirname, 'public', filename);
    
    res.sendFile(filePath);
  });

app.listen (3000, ()=> {
    console.log('server started');
});
