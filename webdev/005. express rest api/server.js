require ('dotenv').config ();
const express=require ('express');
const app=express ();
const mongoose=require ('mongoose');

mongoose.connect (process.env.DATABASE_URL);
const db=mongoose.connection;
db.on ('error', (error)=>console.log(error));
db.once ('open', ()=>console.log('connected to database'));

app.use (express.json ());
const subscriberrouter=require ('./routes/subscribers');
app.use ('/subscribers', subscriberrouter);

app.listen (3000, ()=> {
    console.log('server started');
});
