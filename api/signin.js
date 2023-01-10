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

    const { email, password} = req.body;

    try {
        const userRef = db.collection('users')
        let user = await userRef.where('email', '==', email).get()

        if(user.empty){
            return res.status(400).json({errors: 'Email not found'})
        }

        var found;
        user.forEach((doc) => {
            found = doc.data();
        });

        const matched = await bcrypt.compare(password, found.password)
        if(!matched){
            return res.status(400).json({errors: 'invalid password'})
        }

        const payload = {
            user: {
                id: found.id,
                email: found.email
            },
        };
        
        jwt.sign(
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