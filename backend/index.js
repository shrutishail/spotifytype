
const express = require('express')
const app = express()
const mongoose = require('mongoose')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/shrassign')
    .then(() => { console.log("connection established"); }).catch((err) => { console.log(err); })

const artSchema = new mongoose.Schema({
    name: String ,
    dob: Date,
    bio:String

})
const artists = new mongoose.model('artists', artSchema)

const songSchema = new mongoose.Schema({
    name: String,
    dor: Date,
    artwork: String,
    sel: String,
    
    
    
    

    

})
const songs = new mongoose.model('songs', songSchema)

app.post('/postartist', async (req, res) => {
    console.log(req.body);
    const { name, dob, bio } = req.body
   
    const data = await new artists({ name, dob, bio })
    const sdata = await data.save()
    console.log(sdata);
    
    
    res.send("data submited")
})
app.get('/getartists', async (req, res) => {
    var data = await artists.find({})
    console.log(data);
    res.json(data)
})
app.post('/postsongs',  async(req, res) => {
    const { name, dor,artwork,sel } = req.body
    console.log(req.body);
    const data = await new songs({name,dor,artwork,sel })
    const sdata = await data.save()
    console.log(sdata);
    
    res.send("data submited")
})
app.get('/getsongs', async (req, res) => {
    var data = await songs.find({})
    console.log(data);
    res.json(data)
})





app.listen(3001,(()=>{console.log("port listening");}))

