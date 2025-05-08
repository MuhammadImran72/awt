const router = require("express").Router();
const multer = require('multer');
const { checkToken, isAdmin } = require("../../auth/token_validation");
const {
getAllCompanies,
addCompanyService,
getCompanyServicesById,
updateCompanyImageById,
deleteAllCompanyServices,
updateCompanyServiceById,
deleteCompanyServiceById,
addCompanyServicesImagesByCSId

} = require("./company_services.controller");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './CompanyServiceImages');
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
router.get("/", use(getAllCompanies));

router.get("/:id",use(getCompanyServicesById));

router.post("/", use(addCompanyService));
router.post("/addCompanyServiceImages/:id", upload.array('imageFile'),use(addCompanyServicesImagesByCSId));
router.post("/updateCompanyImage/:id",  upload.single('imageFile'),use(updateCompanyImageById));
router.delete("/", use(deleteAllCompanyServices));
router.put("/:id", use(updateCompanyServiceById));
router.delete("/:id", use(deleteCompanyServiceById));

module.exports = router;