const express = require('express')
const router= new express.Router()
const News = require('../models/news') //model

////////////////////////////////////////////////////////////////////////////////

// post

router.post('/news',(req,res)=>{
    const news = new News(req.body)
    news.save().then(()=>{
        // to show in post man
        res.status(200).send(news)
    }).catch((error)=>{
        res.status(400).send(error)
    })
})
///////////////////////////////////////////////////////////////////////////////

// Get

router.get('/news',(req,res)=>{
    News.find({}).then((news)=>{
        res.status(200).send(news)
    }).catch((error)=>{
        res.status(500).send("internal server error")
    })
})

////////////////////////////////////////////////////////////////////

//Get by id

router.get('/news/:id',(req,res)=>{
    console.log(req.params)
    const _id = req.params.id
    News.findById(_id).then((news)=>{
        if(!news){
            return res.status(400).send('unable to send news')
        }
        res.status(200).send(news)
    }).catch((e)=>{
        res.status(500).send('internal server error')
    })

})

////////////////////////////////////////////////////////////////

// update with some restrictions

router.patch('/news/:id', async(req,res)=>{
    // access key
    const updates = Object.keys(req.body)
    console.log(updates)

    const allawedupdates = ['title','description']

    var isValid = updates.every((update)=> allawedupdates.includes(update))
    
    // console.log(isValid)
    if(!isValid){
       return res.status(400).send('cant not update')
    }
    const _id=req.params.id
    try{

        const news = await News.findByIdAndUpdate(_id,req.body,{
            new:true,
            runValidators:true
        })
        if(!news){
            return res.send('no news found')
        }
        res.status(200).send(news)
        
    }catch{
        res.status(400).send('Error has occured')
    }

})



//////////////////////////////////////////////////////////////

// Delete

router.delete('/news/:id',(req,res)=>{
    console.log(req.params)
    const _id = req.params.id
    News.findByIdAndDelete(_id).then((news)=>{
        if(!news){
            return res.status(400).send('unable to send news')
        }
        res.status(200).send(news)
    }).catch((e)=>{
        res.status(500).send('internal server error')
    })

})

////////////////////////////////////////////////////////////


module.exports = router