import { supabase } from '../Config/supabase.config.js';




export default class ProfileModel {
    static async getAllRecords() {
        try {
            // Kald til database
            let { data, error } = await supabase
                  .from('profiles')
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
    static async getRecordById(id) {
        try {
            const { data, error } = await supabase
                .from('profiles')
                .select('id, firstname')
                .eq('id', id)
            if(error) {
                throw new Error(error.message)
            } else {
                return data
            }
        } catch (error) {
            console.error(`Fejl i kald af artistliste: ${error}`)
        }
    }
    static async createRecord(formdata) {
        try {
            const { data, error } = await supabase
            .from('profiles')
            .insert([
                {
                    user_id:formdata.user_id,
                    firstname: formdata.firstname,
                    lastname: formdata.lastname,
                    address:formdata.address,
                    zipcode:formdata.zipcode,
                    city:formdata.city,
                    country:formdata.country,
                    email:formdata.email,
                    phone:formdata.phone,
                    gender:formdata.gender,
                    birthdate:new Date (formdata.birthdate)
                }
            ])
            .select('id')
            .single()
            if(error) {
                console.log(error);
                throw new Error(error.message)
            } else {
                return data
            }
 
         } catch (error) {
            console.error(`Fejl i oprettelse af artist: ${error}`)
        }
    }
    
    static async updateProfile(formdata){
        try{
            let { data, error } = await supabase
                .from('profiles')
                .update([
                    {
                    firstname: formdata.firstname,
                    middlename: formdata.middlename,
                    lastname: formdata.lastname,
                    address:formdata.address,
                    zipcode:formdata.zipcode,
                    city:formdata.city,
                    country:formdata.country,
                    email:formdata.email,
                    phone:formdata.phone,
                    gender:formdata.gender,
                    birthdate:formdata.birthdate
                    }
                ])
                .eq('id', formdata.id);
           
                if(error) {
                    throw new Error(error.message)
                } else {
                    return data
                }
   
             } catch (error) {
                console.error(`Fejl i opdatering af artist: ${error}`)
            }
    }

    static async deleteRecord(formdata) {

        try{
            let { data, error } = await supabase
           .from('profiles')
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


