const router = require("express").Router();
const multer = require('multer');
const { checkToken, isAdmin } = require("../../auth/token_validation");
const {
getAllPartners,
addPartner,
getPartnerById,
getAllPartnersByCompanyId,
updatePartnerById,
deleteAllPartnersByCompanyId,
deleteAllPartners,
deletePartnerById,
updatePartnerImageById

} = require("./partner.controller");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './PartnerImages');
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
router.get("/", use(getAllPartners));

router.get("/company/:id",use(getAllPartnersByCompanyId));
router.get("/:id",use(getPartnerById));

router.post("/",  use(addPartner));
router.post("/updatePartnerImage/:id",  upload.single('imageFile'),use(updatePartnerImageById));
router.delete("company/:id",  use(deleteAllPartnersByCompanyId));
router.delete("/",  use(deleteAllPartners));
router.put("/:id", use(updatePartnerById));
router.delete("/:id",use(deletePartnerById));

module.exports = router;