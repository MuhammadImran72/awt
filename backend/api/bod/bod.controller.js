const {
  getAllBOD,
addBOD,
getBODById,
updateBODById,
deleteAllBOD,
deleteBODById,
updateBODImageById
   
  } = require("./bod.service");
  module.exports = {
    addBOD: (req, res) => {
      const body = req.body;
      addBOD(body).then((results)=>
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
  
  
    getBODById: (req, res) => {
      const id = req.params.id;
      getBODById(id, (err, results) => {
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

    getAllBOD: (req, res) => {
      getAllBOD((err, results) => {
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
    
    
    updateBODImageById: (req, res) => {
      let file = req.file;
      const id = req.params.id;
      updateBODImageById(id, file, (err, results) => {
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
  
    updateBODById: (req, res) => {
      const body = req.body;
      const id = req.params.id;
      updateBODById(id, body, (err, results) => {
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

    deleteBODById: (req, res) => {
      const id = req.params.id;
      deleteBODById(id, (err) => {
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

    deleteAllBOD: (req, res) => {
      deleteAllBOD((err,result) => {
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
  