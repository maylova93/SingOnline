import express from 'express';// Importerer express biblioteket
import albumModel from '../Models/album.model.js'; // Importerer albumController fra Models mappen

export const albumController = express.Router();// Opretter en ny Router instans til albumController


// Håndterer GET anmodninger til /album.controllers
albumController.get('/album.controllers', async (req, res) => {
	const data = await albumModel.getAllalbum()// Henter alle albums fra albumModel
	res.send(data)// Sender dataen tilbage som svar
});

// Håndterer GET anmodninger til /album.controllers/:id
albumController.get('/album.controllers/:id', async (req, res) => {
	const data = await albumModel.getalbumById(req.params.id)// Henter et specifikt album ved ID fra albumModel
	res.send(data);// Sender dataen tilbage som svar
});

// Håndterer POST anmodninger til /album.controllers
albumController.post('/album.controllers', async (req, res) => {
	const data = await albumModel.createalbum(req.body)// Opretter et nyt album med dataen fra forespørgselens body
	res.send(data)// Sender den oprettede album data tilbage som svar
});

// Håndterer PUT anmodninger til /album.controllers
albumController.put('/album.controllers', async (req, res) => {
    console.log(req.body);// Logger forespørgselens body til konsollen
	const data = await albumModel.updatealbum(req.body)// Opdaterer et eksisterende album med dataen fra forespørgselens body
res.send(data)// Sender den opdaterede album data tilbage som svar

 });

 // Håndterer DELETE anmodninger til /album
 albumController.delete('/album', async (req, res) => {
	console.log(req.body);// Logger forespørgselens body til konsollen

	const data = await albumModel.deletealbum(req.body)// Sletter et album baseret på dataen fra forespørgselens body
   res.send(data)// Sender dataen tilbage som svar
 });
 