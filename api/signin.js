const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const getDatabase = require('../database.js');
const db = getDatabase();
const { check , validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');

router.post("/auth", [
    check('email', 'Email is not in correct format').isEmail(),
    check('password', 'Password is required').exists()

], async (req, res, next) => {
    const errors = validationResult(req)   //if errors is not empty . has errors inside
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const { email, password } = req.body;   //destructure av body.. här hittar jag värderna på email och pass som kommer från post i client.. 

    try {
        const userRef = db.collection('users')   // får genom colletion (lista) med users koolar om email finns.. 
        let user = await userRef.where('email', '==', email).get()

        if(user.empty){
            return res.status(400).json({errors: 'Email not found'})
        }

        var found;
        user.forEach((doc) => {   // Loopar  email som finns i users  genom variabel user 
            found = doc.data();
        });

        const matched = await bcrypt.compare(password, found.password) //matchar det kryperade lösenordet med användarens lösenord  
        if(!matched){
            return res.status(400).json({errors: 'invalid password'})
        }

        const payload = {
            user: {
                id: found.id,
                email: found.email
            },
        };
        
        jwt.sign(     // här genereras token ...
            payload,
            config.get('jwtpass'),
            {expiresIn: 40000},
            (err, token) => {
                if (err) throw err;
                res.json({token})
            }
        )
    } catch (error) {
        res.status(500).send('Server error')
    }

    

});

module.exports = router 