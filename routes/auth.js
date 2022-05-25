const express = require('express');
const bcryptjs = require("bcryptjs");

const User = require('../models/user');

const authRouter = express.Router();

authRouter.post('/api/signup', async (req, res) => {
    try {
        // get data from client
        const email = req.body.email;

        // Validation
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            res.status(400).json({ msg: 'User with same email already exists!' });
        }

        const hashedPassword = await bcryptjs.hash(password, 8);

        // post that data in database
        let user = new User(req.body);
        user.password = hashedPassword
        user = await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = authRouter;
