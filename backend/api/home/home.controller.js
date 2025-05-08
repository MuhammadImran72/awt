const {
  getAllSliders,
addSlider,
getSliderById,
deleteSliderById,
updateSliderImageById,
updateSliderById
   
  } = require("./home.service");
  module.exports = {
    addSlider: (req, res) => {
      const body = req.body;
      addSlider(body).then((results)=>
        {
          return res.status(200).json({
            success: 1,
            data:results
          });
        })
       .catch((err)=>
        {
          return res.status(500).json({
            success: 0,
            message: "Database connection error",
            error:err
          });
        }
       )
    },
  
  
    getSliderById: (req, res) => {
      const id = req.params.id;
      getSliderById(id, (err, results) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              success: 0,
              message: "Database connection errror",
              error:err
            });
          }
          if (!results) {
            return res.status(404).json({
              success: 0,
              message: "Record not Found",
            });
          }
          
          return res.json({
            success: 1,
            data: results,
          });
        });
    },

    getAllSliders: (req, res) => {
      getAllSliders((err, results) => {
        if (err) {
          return res.status(500).json({
            success: 0,
            message: "Database connection errror",
            error:err
          });
        }
        return res.json({
          success: 1,
          data: results,
        });
      });
    },
    
    
    updateSliderImageById: (req, res) => {
      let file = req.file;
      const id = req.params.id;
      updateSliderImageById(id, file, (err, results) => {
        if (err) {
          
          return res.status(500).json({
            success: 0,
            message: err,
          });
        }
 
        return res.status(200).json({
          success: 1,
          message: "Image Updated Successfully",
        });
      });
    },

    updateSliderById: (req, res) => {
      const body = req.body;
      const id = req.params.id;
      updateSliderById(id, body, (err, results) => {
          if (err) {
            console.log(err);
            return res.json({
              success: 0,
              message: "database connection error",
              error:err
            });
          }
          return res.json({
            success: 1,
            message: "Slider updated successfully",
          });
        });
    },
  

    deleteSliderById: (req, res) => {
      const id = req.params.id;
      deleteSliderById(id, (err) => {
          if (err) {
            return res.json({
              success: 0,
              message: "Database conection error",
              error:err
            });
          }
          return res.json({
            success: 1,
            message: "Slider deleted successfully",
          });
        });
    },

    // deleteAllCareer: (req, res) => {
    //   deleteAllCareer((err,result) => {
    //       if (err) {
    //         return res.json({
    //           success: 0,
    //           message: "Database conection error",
    //           error:err
    //         });
    //       }
    //       return res.json({
    //         success: 1,
    //         message: "deleted all Career  successfully",
    //       });
    //     });
    // },

  };
  