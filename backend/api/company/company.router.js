const router = require("express").Router();
//const multer = require('multer');
const { checkToken, isAdmin } = require("../../auth/token_validation");
const {
getAllCompanies,
addCompany,
getCompanyById,


} = require("./company.controller");

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, './Brandimages');
//     },
  
//     filename: (req, file, cb) => {
//         console.log('file',file)
//         cb(null, Date.now()+"-"+file.originalname)
//     }
//   });
  
//   const imageFileFilter = (req, file, cb) => {
//     if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
//         return cb(new Error('You can upload only image files!'), false);
//     }
//     cb(null, true);
//   };

// const upload = multer({ storage: storage, fileFilter: imageFileFilter,limits:{fileSize:1000000}});

const use = fn => (req,res,next)=>
{
    Promise.resolve(fn(req,res,next)).catch(next)
}
router.get("/", use(getAllCompanies));

router.get("/:id",use(getCompanyById));

router.post("/", use(addCompany));
// router.delete("/", use(deleteAllRoles));
// router.put("/:id",use(updateRoleById));
// router.delete("/:id",use(deleteRoleById));

module.exports = router;