import { supabase } from '../Config/supabase.config.js'

export default class SongModel {
	static async getAllRecords() {
		try {
			const { data, error } = await supabase
				.from('songs')
				.select('id, title, created_at, artists(id, name)')

			if(error) {
				throw new Error(error)
			} else {
				return data
			}
		} catch (error) {
			console.error(`Fejl i kald af sangliste: ${error}`)
		}
	}

	static async getRecordById(id) {
		try {
			const { data, error } = await supabase
				.from('songs')
				.select('*, artists(id, name)')
				.eq('id', id)

			if(error) {
				throw new Error(error)
			} else {
				return data
			}
		} catch (error) {
			console.error(`Fejl i kald af sang: ${error}`)
		}
	}	

	static async createRecord(formdata) {
		try {
			const { data, error } = await supabase
			.from('songs')
			.insert([
				{
					title: formdata.title,
					content: formdata.content,
					lyrics: formdata.lyrics,
					artist_id: formdata.artist_id
				}
			])
			if(error) {
				throw new Error(error)
			} else {
				return data
			}

 		} catch (error) {
			console.error(`Fejl i oprettelse af sang: ${error}`)
		}
	}
	static async updateRecord(formdata){
		try{
			let { data, error } = await supabase
				.from('songs')
				.update([
					{
						title: formdata.title,
						content: formdata.content,
						lyrics: formdata.lyrics,
						artist_id: formdata.artist_id
					}
				])
				.eq('id', formdata.id);
		   
				if(error) {
					throw new Error(error.message)
				} else {
					return data
				}
   
			 } catch (error) {
				console.error(`Fejl i opdatering af sang: ${error}`)
			}
	}
	static async deleteRecord(formdata) {

			let { data, error } = await supabase
		   .from('songs')
		   .delete()
		   .eq('id', formdata.id)
		   }
 }


	