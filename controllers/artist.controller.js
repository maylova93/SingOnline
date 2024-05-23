import express from 'express';
import artistModel from '../models/artist.model.js;
export const artistController = express.Router();

artistController.get('/artist', async (req, res) => {
	const data = await artistModel.getAllartists()
	res.send(data)
});

artistController.get('/artist/:id', async (req, res) => {
	const data = await artistModel.getartistById(req.params.id)
	res.send(data);
});

artistController.post('/artist', async (req, res) => {
	const data = await artistModel.createartist(req.body)
	res.send(data)
});

artistController.put('/artist', async (req, res) => {
    console.log(req.body);
	const data = await SongModel.updateartist(req.body)
res.send(data)

 });

 artistController.delete('/artist', async (req, res) => {
    console.log(req.body);
 });
 const data = await artistModel.deleteartist(req.body)
 res.send(data)