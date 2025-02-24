const express = require('express');

const jwt = require("jsonwebtoken");
const User = require('../Models/user');

const auth = async(req,res,next) => {
    const token = req.cookies.token;
    if(!token) {
        return res.status(401).json({error: 'No token, authorisation denied'})
    }else {
        try{
            const decode = jwt.verify(token, "deep");
            req.user = await User.findById(decode.userId).select('-password');
            next();

        }catch (error){
            return res.status(401).json({error: 'Token is not valid'})
        }
    }
}

module.exports = auth; 