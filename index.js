import express from 'express'
import dotenv from 'dotenv'
import { supabase } from './config/supabase.config.js'
import { SongController } from './Controllers/song.controller.js'
import { ProfileController } from './controllers/ProfileController.js'
import { albumController } from './controllers/album.controller.js'
import { artistController } from './controllers/artist.controller.js'
const app = express()
app.use(express.urlencoded({extended:true}))


const port = process.env.PORT
dotenv.config()

app.use(SongController)
app.use(ProfileController)
app.use(artistController)
app.use(albumController)



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
    console.log(`webserveren is runing now on http://localhost:${port}`);
})
