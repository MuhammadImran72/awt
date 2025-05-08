const router = require("express").Router();
const multer = require("multer");
const { checkToken, isAdmin } = require("../../auth/token_validation");
const {
  getAllImages,
  addImage,

  deleteAllImages,
  deleteImageById,
} = require("./gallery.controller");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./Gallery");
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const imageFileFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return cb(new Error("You can upload only image files!"), false);
  }
  cb(null, true);
};

const upload = multer({
  storage: storage,
  fileFilter: imageFileFilter,
  limits: { fileSize: 1000000 },
});

const use = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};
router.get("/", use(getAllImages));

//router.get("/:id",use(getImageById));

router.post("/", upload.array("imageFile"), use(addImage));
router.delete("/", use(deleteAllImages));
router.delete("/:id", use(deleteImageById));

module.exports = router;
