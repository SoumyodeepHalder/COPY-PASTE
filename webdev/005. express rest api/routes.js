const express=require ('express');
const router=express.Router ();
const subdata=require ('./model');

// getting all
router.get ('/', async(req, res)=>{
    try {
        const temp=await subdata.find ();
        res.json (temp);
    } catch (err){
        res.status (500).json ({message:err.message});
    }
});
// getting one
router.get ('/:id', getSubscriber, (req, res)=>{
    res.json (res.onesub);
});
// creating one
router.post ('/', async(req, res)=>{
    const temp=new subdata ({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    });
    try {
        const newSubscriber=await temp.save ();
        res.status (201).json (newSubscriber);
    } catch (err){
        res.status (400).json ({message: err.message});
    }
});
// updating one
router.patch ('/:id', getSubscriber, async(req, res)=>{
    if (req.body.name != null){
        res.onesub.name=req.body.name;
    }
    if (req.body.subscribedToChannel != null){
        res.onesub.subscribedToChannel=req.body.subscribedToChannel;
    }
    try {
        const updatedSubscriber=await res.onesub.save();
        res.json (updatedSubscriber)
    } catch (err){
        res.status (400).json ({message: err.message});
    }

});
// deleting one
router.delete ('/:id', getSubscriber, async(req, res)=>{
    try {
        await res.onesub.deleteOne ();
        res.json ({message: 'deleted subscriber'});
    } catch (err) {
        res.status (500).json ({message: err.message});
    }
});

async function getSubscriber (req, res, next) {
    let temp;
    try {
        temp=await subdata.findById (req.params.id)
        if (temp == null){
            return res.status (404).json ( {message: 'cannot find subscriber'});
        }
    } catch (err) {
        return res.status (500).json ({message: err.message});
    }
    res.onesub=temp;
    next ();
}

module.exports=router;
