const router = require("express").Router();
const multer = require('multer');
const { checkToken, isAdmin } = require("../../auth/token_validation");
const {
addMDMessage,
getMDMessage,
updateMdImageById,
deleteMDMessage,
updateMdMessageById

} = require("./md.controller");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './MDImages');
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

const upload = multer({ storage: storage, fileFilter: imageFileFilter,limits:{fileSize:5000000}});

const use = fn => (req,res,next)=>
{
    Promise.resolve(fn(req,res,next)).catch(next)
}
router.get("/", use(getMDMessage));

//router.get("/:id",use(getSliderById));

router.post("/",  use(addMDMessage));
router.post("/updateMDImage/:id", upload.single('imageFile'),use(updateMdImageById));
router.delete("/", use(deleteMDMessage));
router.put("/:id",use(updateMdMessageById));
//router.delete("/:id",use(deleteSliderById));

module.exports = router;