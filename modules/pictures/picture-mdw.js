/**
 * Created by jeremysouffir on 24/10/2016.
 */

var cloudinary      = require('cloudinary');

class PictureMdw{
    uploadBase64Pic(data,next){//the format should be:Cloudinary::Uploader.upload("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAU...
        //example:https://support.cloudinary.com/hc/en-us/articles/203125741-Can-I-upload-using-DATA-URI-BASE64-
        cloudinary.uploader.upload(data,function(result){
            next(result);
        });
    }
}

module.exports=PictureMdw;
