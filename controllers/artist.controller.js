import express from 'express';
import artistModel from '../models/artist.model.js;
export const artistController = express.Router();

artistController.get('/artist', async (req, res) => {
	const data = await SongModel.getAllRecords()
	res.send(data)
});

artistController.get('/artist/:id', async (req, res) => {
	const data = await SongModel.getRecordById(req.params.id)
	res.send(data);
});

artistController.post('/artist', async (req, res) => {
	const data = await SongModel.createRecord(req.body)
	res.send(data)
});

artistController.put('/artist', async (req, res) => {
    console.log(req.body);
	const data = await SongModel.updateRecord(req.body)
res.send(data)

 });

 artistController.delete('/artist', async (req, res) => {
    console.log(req.body);
 });
 const data = await artistModel.deleteartist(req.body)
 res.send(data)