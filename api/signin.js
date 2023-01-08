const express = require('express');
const router = express.Router();
const getDatabase = require('../database.js')
const db = getDatabase();





router.post('/auth', async (req, res, next) => {
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
    

});

module.exports = router 

