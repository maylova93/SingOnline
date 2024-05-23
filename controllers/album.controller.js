import express from 'express';
import albumController from '../Models/album.model.js';
export const albumController = express.Router();

albumController.get('/album.controllers', async (req, res) => {
	const data = await SongModel.getAllRecords()
	res.send(data)
});

albumController.get('/album.controllers/:id', async (req, res) => {
	const data = await SongModel.getRecordById(req.params.id)
	res.send(data);
});

albumController.post('/album.controllers', async (req, res) => {
	const data = await SongModel.createRecord(req.body)
	res.send(data)
});

albumController.put('/album.controllers', async (req, res) => {
    console.log(req.body);
	const data = await SongModel.updateRecord(req.body)
res.send(data)

 });

 albumController.delete('/album', async (req, res) => {
	console.log(req.body);
 });
 
 const data = await albumModel.deletealbum(req.body)
res.send(data)