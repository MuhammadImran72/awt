const router = require("express").Router();
const multer = require('multer');
const { checkToken, isAdmin } = require("../../auth/token_validation");
const {
getAllCareer,
addCareer,
getCareerById,
updateCareerById,
deleteAllCareer,
deleteCareerById,
updateCareerImageById

} = require("./career.controller");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './CareerImages');
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
router.get("/", use(getAllCareer));

router.get("/:id",use(getCareerById));

router.post("/", use(addCareer));
router.post("/updateCareerImage/:id", upload.single('imageFile'),use(updateCareerImageById));
router.delete("/", use(deleteAllCareer));
router.put("/:id",use(updateCareerById));
router.delete("/:id",use(deleteCareerById));

module.exports = router;