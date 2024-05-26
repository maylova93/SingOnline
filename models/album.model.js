import {supabase} from '../config/supabase.config.js'

export default class AlbumModel {
    static async getAllAlbums() {
      try {
          const {data , error} = await supabase
          .from('albums')
          .select('id, title, artists(name), release_date')
          if (error){
              throw new Error (error)
          }else{
              return data
          }
      }catch (error){
         console.log(`Fejl i kald af albums:${error}`)
      }
    }
  static async getAlbumById(id){
    try {
      const { data, error } = await supabase
        .from('albums')
        .select('id, title')
        .eq('id', id)
      if(error) {
        throw new Error(error)
      } else {
        return data
      }
    } catch (error) {
      console.error(`Fejl i kald af albumliste: ${error}`)
    }
  }
  static async createAlbum(formdata) {
    try {
      const { data, error } = await supabase
      .from('albums')
      .insert([
        {
          title: formdata.title,
          description:formdata.description,
          image:formdata.image,
          release_date:formdata.release_date,
          artist_id: formdata.artist_id,
          created_at:formdata.created_at
        }
      ])
      if(error) {
        throw new Error(error)
      } else {
        return data
      }
   
     } catch (error) {
      console.error(`Fejl i oprettelse af album: ${error}`)
    }
  }


static async updatealbum(formdata){
    try{
        let { data, error } = await supabase
            .from('album')
            .update([
                {
                    title: formdata.title,
                    description: formdata.description,
                    image: formdata.image,
                    artist_id: formdata.artist_id,
                    release_date:formdata.release_date,
                }
            ])
            .eq('id', formdata.id);
       
            if(error) {
                throw new Error(error.message)
            } else {
                return data
            }

         } catch (error) {
            console.error(`Fejl i opdatering af album: ${error}`)
        }
}


static async deleteRecord(formdata) {

try{
    let { data, error } = await supabase
   .from('album')
   .delete()
   .eq('id', formdata.id)
}
catch (error) {
    console.error(`Fejl i opdatering af album: ${error}`)
}

const data = await albumModel.deleteRecord(req.body)
res.send(data)

   }
    }
   





