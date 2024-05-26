import express from 'express';
import ProfileModel from '../Models/Profilemodel.js';
export const ProfileController = express.Router();

ProfileController.post('/Profile', async (req, res) => {
	const data = await ProfileModel.createRecord(req.body)
	res.send(data)
});


ProfileController.get('/Profile', async (req, res) => {
	const data = await ProfileModel.getAllRecords()
	res.send(data);
});



ProfileController.get('/Profile/:id', async (req, res) => {
	const data = await ProfileModel.getRecordById(req.params.id)
	res.send(data);
});


ProfileController.put('/Profile', async (req, res) => {
    console.log(req.body);
	const data = await ProfileModel.updateRecord(req.body)
	res.send(data)
});


ProfileController.delete('/Profile', async (req, res) => {
	console.log(req.body);
	const data = await ProfileModel.deleteRecord(req.body)
	res.send(data)
 });
