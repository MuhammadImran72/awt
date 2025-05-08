const {
  getAllCareer,
addCareer,
getCareerById,
updateCareerById,
deleteAllCareer,
deleteCareerById,
updateCareerImageById
   
  } = require("./career.service");
  module.exports = {
    addCareer: (req, res) => {
      const body = req.body;
      addCareer(body).then((results)=>
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
  
  
    getCareerById: (req, res) => {
      const id = req.params.id;
      getCareerById(id, (err, results) => {
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

    getAllCareer: (req, res) => {
      getAllCareer((err, results) => {
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
    
    
    updateCareerImageById: (req, res) => {
      let file = req.file;
      const id = req.params.id;
      updateCareerImageById(id, file, (err, results) => {
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
  
    updateCareerById: (req, res) => {
      const body = req.body;
      const id = req.params.id;
      updateCareerById(id, body, (err, results) => {
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
            message: "service updated successfully",
          });
        });
    },

    deleteCareerById: (req, res) => {
      const id = req.params.id;
      deleteCareerById(id, (err) => {
          if (err) {
            return res.json({
              success: 0,
              message: "Database conection error",
              error:err
            });
          }
          return res.json({
            success: 1,
            message: "Career deleted successfully",
          });
        });
    },

    deleteAllCareer: (req, res) => {
      deleteAllCareer((err,result) => {
          if (err) {
            return res.json({
              success: 0,
              message: "Database conection error",
              error:err
            });
          }
          return res.json({
            success: 1,
            message: "deleted all Career  successfully",
          });
        });
    },

  };
  