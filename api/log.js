const express = require('express');
const { refreshToken } = require('firebase-admin/app');
const { useRef } = require('react');
const router = express.Router();

//hämta funktionen och anropar databasen..
//ger routen till databasen
const getDatabase = require('../database.js')
const db = getDatabase();


//GET users by id
router.get('/userlist/:id', async (req, res) => {
    const id = req.params.id;

	try {
		const docRef = await db.collection('users').doc(id).get();

		if (!docRef.exists) {
			res.status(404).send('OOPS user does not found! 🙁');
			return;
		}

		const data = docRef.data();
		res.send(data);
	}

	catch (error) {
		console.log('An error occured. Please try again 🙁' + error.message);
		res.status(500).send(error.message);
	}
});





//TEST
router.get("/userlist", async (req, res) => {


   let users = [];
   console.log(users)

	try {
		const docRef = db.collection('users')
        const snapShot = await docRef.get();

		if (snapShot.empty) {
			res.status(404).send('OOPS user not found 🙁');
			return;
		};
		snapShot.forEach(doc => {
			const data = doc.data();
			data.id = doc.id;
			users.push(data);
		})
		res.send(users);
	}

	catch (error) {
		console.log('An error occured . Please try again 🙁' + error.message);
		res.status(500).send(error.message);
	}
});
  

//hääär


/*
router.post('/login', async (req, res, next) => {
        const object = req.body
		const docRef = await db.collection('users').add(object);
		const userRef = await db.collection('users').doc(docRef.id).get();
		const userData = userRef.data();
	try {
		if (userRef.exists) {
        return res.send({
			id: docRef.id,
			email: userData.email,
			password: userData.password,
        });
    }  return res.status(404).json({errorCode: 400, errorMessage: `Login failed'${id}' not found`});
    }
	catch (error) {
		console.log('An error occured. Please try again 🙁' + error.message);
		res.status(500).send(error.message);
	}
        
    
});*/



// DELETE users by id   
router.delete('/userlist/:id', async (req, res) => {
    const id = req.params.id;

	try {
		const docRef = await db.collection('users').doc(id).get();

		if (!docRef.exists) {
			res.status(404).send('OOPS id does not exist! 🙁 ' + id);
			return;
		}

		await db.collection('users').doc(id).delete();
		res.sendStatus(200);
	}

	catch (error) {
		console.log('An error occured. Please try again 🙁' + error.message);
		res.status(500).send(error.message);
	}
});

module.exports = router 