import { supabase } from '../Config/supabase.config.js';

export default class artistsModel {
    static async getAllartists() {
        try {
            // Kald til database
            let { data, error } = await supabase
                  .from('artists')
                  .select('name')
            if(error) {
                throw new Error(error.message)
            } else {
                return data
            }
        
        }
        catch(error) {
            console.error(`Fejl: kan ikke hente sangliste, ${error}`)
        }

    }
    static async getAllartists(){

    }   
    static async deleteartist(formdata) {

        try{
            let { data, error } = await supabase
           .from('artists')
           .delete()
           .eq('id', formdata.id)
           if(error){
            throw new Error(error.message)
           }
           else {
            return data
           }
        }
         catch(error){
            console.error(error);
         }
           }
       
}


