const express = require('express');
const router = express.Router();
const getDatabase = require('../database.js')
const db = getDatabase();



router.post("/register", async (req, res, next) => {

    //👇🏻 Checks if there is an existing user with the same email or password
    const { email, password} = req.body
    
    //const checkAuth =  await db.collection('users').get({ email: email, password: password })
  
    if (email && password) {
        const docRef = await db.collection('users').add({ email: email, password: password })
  
        const usersRef = await db.collection('users').doc(docRef.id).get();
        if(usersRef.exists){
        const usersData = usersRef.data();
        res.send({ 
            id:docRef.id,
            email: usersData.email,
            password: usersData.password
        })
      } else {
          //res.sendStatus(404).send("User allready exists!")
          //alert("already exists
          return console.log("User allready exists!!!")
      }
    }
  });

  module.exports = router 