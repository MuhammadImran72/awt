const router = require("express").Router();
const multer = require('multer');
const { checkToken, isAdmin } = require("../../auth/token_validation");
const {
getAllAboutUS,
addAboutUS,
getAboutUSById,
updateAboutUSById,
deleteAllAboutUS,
deleteAboutUSById,
updateAboutUSImageById

} = require("./aboutus.controller");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './AboutUsImages');
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

const upload = multer({ storage: storage, fileFilter: imageFileFilter,limits:{fileSize:1000000}});

const use = fn => (req,res,next)=>
{
    Promise.resolve(fn(req,res,next)).catch(next)
}
router.get("/", use(getAllAboutUS));

router.get("/:id",use(getAboutUSById));

router.post("/", use(addAboutUS));
router.post("/updateAboutUSImage/:id", upload.single('imageFile'),use(updateAboutUSImageById));
router.delete("/", use(deleteAllAboutUS));
router.put("/:id",use(updateAboutUSById));
router.delete("/:id",use(deleteAboutUSById));

module.exports = router;