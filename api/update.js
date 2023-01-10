const express = require('express');
const router = express.Router();
const getDatabase = require('../database.js')
const db = getDatabase();
const generatePassword = require('password-generator');
const { check , validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');




// Update password  
router.put('/userlist/:id', [
	check('email', 'Email is required').isEmail(),
	check('password', 'Password is required').isLength({min:2})
], async (req, res) => {
	const errors = validationResult(req) 
    if(!errors.isEmpty()){
       return res.status(400).json({errors: errors.array()})
	}
	
	const { email, password } = req.body;
	const id = req.params.id

	console.log(password)

	try {

		const userRef = db.collection('users')
		let user = await userRef.where('email', '==', email).get()

		var found;
        user.forEach((doc) => {
            found = doc.data();
		})
		console.log(found,'foound') // loopar igenom users list och hittar användare

		const newPassword = await db.collection('users').doc(id).update({
			password:password
		})

		if(newPassword){
			return res.status(200).json({errors: 'password changed!'})
		}
		await db.collection('users').doc(id).set({
            password: hashedPassword
        })
        const payload = {
            user: {
                password
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

	
});

module.exports = router 