const express = require("express");
const router = express.Router();
const videoController = require('../Controllers/video');
const auth = require('../Middleware/authentication')

router.post('/video', auth,videoController.uploadVideo);
router.get('/allvideo',videoController.getAllVideo);
router.get('/getvideobyid/:id',videoController.getVideoById);
router.get('/:userId/channel',videoController.getAllVideoByUserId);


module.exports = router;