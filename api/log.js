

const express = require('express');
const router = express.Router();

//hämta funktionen och anropar databasen..
//ger routen till databasen
const getDatabase = require('../database.js')
const db = getDatabase();


//GET users by id
router.get('/userlist/:id', async (req, res) => {
    const id = req.params.id;
    console.log(id,'iiiiiiiid')

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
  



router.post("/register", async (req, res, next) => {

  //👇🏻 Checks if there is an existing user with the same email or password
  const { email, password} = req.body

  if (email && password) {
      const docRef = await db.collection('users').add({ email: email, password: password})

      const usersRef = await db.collection('users').doc(docRef.id).get();
      const usersData = usersRef.data();
      res.send({ 
          id:docRef.id,
          email: usersData.email
      })
  }
});

// DELETE users by id   
router.delete('/userlist/:id', async (req, res) => {
    //const id = req.params.id;
    const { id } = req.body.id

	try {
		const docRef = await db.collection('users').doc(id);

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
