const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const getDatabase = require('../database.js');
const db = getDatabase();
const { check , validationResult } = require('express-validator');
const generatePassword = require('password-generator');
const config = require('config');
const jwt = require('jsonwebtoken');

router.post("/register", [
        check('email', 'Email is required').isEmail(),  // kollar att email finns 
        check('password', 'Password is required').isLength({min:2})  // samt lösenord som måste va minst två st tecken
], async (req, res, next) => {    
    const errors = validationResult(req) 
    if(!errors.isEmpty()){
       return res.status(400).json({errors: errors.array()})
    }

    const { email, password } = req.body;   //request body...
    
    try {
        const userRef = db.collection('users');
        let user = await userRef.where('email', '==', email).get() 
        console.log(user,'usssser')

        if(!user.empty){
            return res
            .status(400)
            .json({errors: 'This is email has allreadfy been used'});
        } 

        const id = generatePassword(6,false);
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        //krypetrar användarens lösenord för att öndra användarens lösenor till slumpmässig tecken..
       
        await db.collection('users').doc(id).set({  //settar användarens uppfiter nidan i databasen
            id,
            email,
            password: hashedPassword
        })
        const payload = {
            user: {
                id,
                email
            },
        };
        jwt.sign(
            payload,
            config.get('jwtpass'),
            {expiresIn: 40000},
            (err, token) => {
                if (err) throw err;
                res.json({token});
            }
        )

    } catch (errors) {
        console.log(errors)

    }
               
})

  module.exports = router 