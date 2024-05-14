const multer = require("multer");


const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, './public')
    },
    filename:  function(req, file,cb){
        cb(null, file.originalname + "-" + Date.now()+ ".jpg")
    }
})

const upload = multer({storage})
// 

// this upload will be used as middleware and
// as well as singleupload or multiple upload
// like this upload.single("image")