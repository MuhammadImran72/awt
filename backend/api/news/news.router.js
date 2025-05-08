const router = require("express").Router();
const multer = require('multer');
const { checkToken, isAdmin } = require("../../auth/token_validation");
const {
getAllNews,
addNews,
getNewsById,
updateNewsById,
deleteAllNews,
deleteNewsById,
updateNewsImageById

} = require("./news.controller");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './NewsImages');
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
router.get("/", use(getAllNews));

router.get("/:id",use(getNewsById));

router.post("/",  use(addNews));
router.post("/updateNewsImage/:id",  upload.single('imageFile'),use(updateNewsImageById));
router.delete("/",  use(deleteAllNews));
router.put("/:id", use(updateNewsById));
router.delete("/:id", use(deleteNewsById));

module.exports = router;