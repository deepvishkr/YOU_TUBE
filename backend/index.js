const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const AuthRoutes = require('./Routes/user')
const VideoRoutes =  require('./Routes/video')
const CommentRoutes = require('./Routes/comment')
const app = express();
const PORT = 3000;
const cors = require('cors');

// Middleware
app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true
}))


app.use(express.json());
app.use(cookieParser());
app.use(AuthRoutes);
app.use(VideoRoutes);
app.use(CommentRoutes);


// Database connection
 const connect = mongoose.connect("mongodb://localhost:27017/youtube")
connect.then(() => {
    console.log("Database Connected");
}) .catch((err) => {
    console.log(err.message);
})

// Starting the Server
app.listen(PORT,() => {
    console.log(`Server running on ${PORT}`);
})

