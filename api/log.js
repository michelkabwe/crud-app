

const express = require('express');
const router = express.Router();

//hämta funktionen och anropar databasen..
//ger routen till databasen
const getDatabase = require('../database.js')
const db = getDatabase();

//👇🏻 An array containing all the users


//👇🏻 Generates a random string as the ID
//const generateID = () => Math.random().toString(36).substring(2, 10);

/*router.get("/userList", (req, res,) => {

    
    let userList = []
     let data = [{"email":"kalle@gmail.com", },
                    {"email":"erik@gmail.com"},
                    {"email":"sanna@gmail.com"}
                    ]
                    res.json(data)

    //res.send(userList)

})*/

//TEST
router.get("/userList", (req, res) => {


    //const snapshot = await users.get()
    //res.send(snapshot)
  
});



router.post("/register", async (req, res, next) => {

  
   
    //👇🏻 Checks if there is an existing user with the same email or password
  console.log(req.body.email,'bodyy parser')
  res.send(req.body);

    

});





module.exports = router 
