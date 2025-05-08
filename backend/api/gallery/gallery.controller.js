const {
  getAllImages,
  addImage,
  
  deleteAllImages,
  deleteImageById,
   
  } = require("./gallery.service");
  module.exports = {
    addImage: (req, res) => {
      
      const body = req.files;
      console.log(body)
      addImage(body,(err, results) => {
        if (err) {
          return res.status(500).json({
            success: 0,
            message: "Database connection errror",
            error:err
          });
        }
        return res.json({
          success: 1,
          message: "Images added successfully",
        });
        })
       
    },
  
  

    getAllImages: (req, res) => {
      getAllImages((err, results) => {
        if (err) {
          return res.status(500).json({
            success: 0,
            message: "Database connection errror",
            error:err
          });
        }
        return res.json({
          success: 1,
          images: results,
        });
      });
    },
    
    
    
  
  

    deleteImageById: (req, res) => {
      const id = req.params.id;
      deleteImageById(id, (err) => {
          if (err) {
            return res.json({
              success: 0,
              message: "Database conection error",
              error:err
            });
          }
          return res.json({
            success: 1,
            message: "Image deleted successfully",
          });
        });
    },

    deleteAllImages: (req, res) => {
      deleteAllImages((err,result) => {
          if (err) {
            return res.json({
              success: 0,
              message: "Database conection error",
              error:err
            });
          }
          return res.json({
            success: 1,
            message: "deleted all Images  successfully",
          });
        });
    },

  };
  