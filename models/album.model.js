import {supabase} from '../config/supabase.config.js'

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
const data = await albumModel.deleteRecord(req.body)
res.send(data)

   }
   
   





