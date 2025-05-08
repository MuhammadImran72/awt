const router = require("express").Router();
const multer = require('multer');
const { checkToken, isAdmin } = require("../../auth/token_validation");
const {
getAllBOD,
addBOD,
getBODById,
updateBODById,
deleteAllBOD,
deleteBODById,
updateBODImageById

} = require("./bod.controller");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './BODImages');
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
router.get("/", use(getAllBOD));

router.get("/:id",use(getBODById));

router.post("/", use(addBOD));
router.post("/updateBODImage/:id", upload.single('imageFile'),use(updateBODImageById));
router.delete("/", use(deleteAllBOD));
router.put("/:id",use(updateBODById));
router.delete("/:id",use(deleteBODById));

module.exports = router;