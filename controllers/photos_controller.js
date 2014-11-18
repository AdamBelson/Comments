var mongoose = require('mongoose'),
    Photo = mongoose.model('Photo');
	
exports.getPhoto = function(req, res){
	//db.photos.findOne(ObjectId("54623d9166eafd901e18ce41"))
	//var ObjectId = mongoose.Types.ObjectId;
	Photo.findOne({_id: req.query.photoId}).exec(function(err, photo){
		if (!photo){
			res.status(404).json({msg: req.query.PhotoId});
		} else {
			res.json(photo);
		}
	});
	
};

exports.getPhotos = function(req, res){
	
	Photo.find().exec(function(err, photos){
		if (!photos){
			res.status(404).json({msg: 'Photos not found'});
		} else {
			res.json(photos);
		}
	});
	
};
