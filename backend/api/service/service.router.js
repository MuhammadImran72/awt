const router = require("express").Router();
const multer = require('multer');
const { checkToken, isAdmin } = require("../../auth/token_validation");
const {
getAllServices,
addService,
getServiceById,
getAllServicesByCompanyId,
updateServiceById,
deleteAllServicesByCompanyId,
deleteAllServices,
deleteServiceById,
updateServiceImageById

} = require("./service.controller");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './ServiceImages');
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
router.get("/", use(getAllServices));

router.get("/company/:id",use(getAllServicesByCompanyId));
router.get("/:id",use(getServiceById));

router.post("/", use(addService));
router.post("/updateServiceImage/:id",  upload.single('imageFile'),use(updateServiceImageById));
router.delete("company/:id",  use(deleteAllServicesByCompanyId));
router.delete("/",  use(deleteAllServices));
router.put("/:id",(updateServiceById));
router.delete("/:id",use(deleteServiceById));

module.exports = router;