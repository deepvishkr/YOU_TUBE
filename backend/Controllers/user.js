const User = require('../Models/user');
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const cookieOption = {
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
    maxAge: 3600000
}

exports.signUp = async (req, res) => {
    try {
        const { channelName, userName, about, profilePic, password } = req.body;
        const isExist = await User.findOne({userName});
        if(isExist){
           return res.status(400).json({error: "Username Already Exists, Please try with another userName"})
        } else{
            let updatedPassword = await bcryptjs.hash(password, 10);
            const user = new User({ channelName, userName, about, profilePic, password: updatedPassword});
            await user.save();
            res.status(201).json({message: 'User registered successfully', success:"yes" ,data: user});
        }
    } catch (error) {
         res.status(500).json({ error: 'Server Error'})
    }
}

exports.signIn = async(req,res) => {
    try {
        const { userName, password } = req.body;
        const user = await User.findOne({ userName });

        if (user && await bcryptjs.compare(password, user.password)) {
            const token = jwt.sign({ userId: user._id }, "deep");
            res.cookie('token', token, cookieOption);
            console.log('Cookie set:', req.cookies);

            res.json({ message: 'Logged in successfully', success: "true", token: token , user})
        } else {
            res.status(400).json({ error: 'Invalid Credentials' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "server error" })
    }
}

exports.logout = async(req,res) => {
    res.clearCookie('token', cookieOption).json({ message: 'Logged out successfully'})
}


