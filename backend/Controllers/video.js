const video = require('../Models/video');

exports.uploadVideo = async(req,res)=> {
    try{
        const { title, description, videoLink, videoType, thumbnail} = req.body;
        console.log(req.user);

        const videoUpload = new video({ user: req.user._id, title, description, videoLink, videoType, thumbnail});
        await videoUpload.save();

        res.status(201).json({ sucess: "true", videoUpload});


    }catch(error){
        console.log(error);
        res.status(500).json({ error: 'Server Error'})
    }
}


exports.getAllVideo = async(req,res)=>{
    try{
        const videos = await video.find().populate('user','channelName profilePic userName createdAt');
        res.status(201).json({sucess: "true", "videos": videos })

    }catch (error){
        console.log(error);
        res.status(500).json({error: 'Server error'})
    }
}

exports.getVideoById = async (req, res) => {
    try {
      let {id} = req.params;
      const videos = await video.findById(id).populate('user','channelName profilePic userName createdAt');
      res.status(200).json({ success: "true", "videos": videos });
      console.log(id);
    } catch (error) {
       
        res.status(500).json({ error: error.message || "Internal Server Error" });
    }
};

exports.getAllVideoByUserId = async (req,res)=>{
    try {
        let{userId} = req.params;
        const videos = await video.find({user:userId}).populate('user', 'channelName profilePic userName createdAt');
        res.status(200).json({ success: "true", "videos": videos });
    } catch (error) {
        res.status(500).json({ error: error.message || "Internal Server Error" });
    }
}