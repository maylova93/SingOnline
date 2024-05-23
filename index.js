import express from 'express'
import dotenv from 'dotenv'
import { createClient } from '@supabase/supabase-js'
import { supabase } from './config/supabase.config.js'
import songModel from './models/song.model.js'
import artistModel from './models/artists.model.js'
import { SongController } from './Controllers/song.controller.js'
const app = express()
app.use(express.urlencoded({extended:true}))


const port = process.env.PORT
dotenv.config()

app.use(SongController)



app.get('/test', async (req, res) =>{
  const data = await songModel.getAllRecords()
  res.send(data);
})

app.get('/artists', async (req, res)=>{
    const { data, error} = await supabase
    .from ('artists')
    .select('id,name')
  
    if (error){
        console.log(error)
    }else{
        console.log(data)
        res.send(data)
    }
})
app.listen(port,()=>{
    console.log(`webserveren is runing now on http:/localhost:${port}`);
})
