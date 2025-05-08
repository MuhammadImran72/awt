const router = require("express").Router();
const multer = require('multer');
const { checkToken, isAdmin } = require("../../auth/token_validation");
const {
getAllSliders,
addSlider,
getSliderById,
updateSliderById,
deleteSliderById,
updateSliderImageById

} = require("./home.controller");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './HomeImages');
    },
  
    filename: (req, file, cb) => {
        console.log('file',file)
        cb(null, Date.now()+"-"+file.originalname)
    }
  });
  
  const imageFileFilter = (req, file, cb) => {
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error('You can upload only image files!'), false);
    }
    cb(null, true);
  };

const upload = multer({ storage: storage, fileFilter: imageFileFilter,limits:{fileSize:10000000}});

const use = fn => (req,res,next)=>
{
    Promise.resolve(fn(req,res,next)).catch(next)
}
router.get("/", use(getAllSliders));

router.get("/:id",use(getSliderById));

router.post("/",  use(addSlider));
router.post("/updateSliderImage/:id",  upload.single('imageFile'),use(updateSliderImageById));
// router.delete("/", use(deleteAllSliders));
 router.put("/:id", use(updateSliderById));
router.delete("/:id",  use(deleteSliderById));

module.exports = router;