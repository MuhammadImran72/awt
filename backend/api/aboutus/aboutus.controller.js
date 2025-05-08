const {
  getAllAboutUS,
  addAboutUS,
  getAboutUSById,
  updateAboutUSById,
  deleteAllAboutUS,
  deleteAboutUSById,
  updateAboutUSImageById
   
  } = require("./aboutus.service");
  module.exports = {
    addAboutUS: (req, res) => {
      const body = req.body;
      addAboutUS(body).then((results)=>
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
  
  
    getAboutUSById: (req, res) => {
      const id = req.params.id;
      getAboutUSById(id, (err, results) => {
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

    getAllAboutUS: (req, res) => {
      getAllAboutUS((err, results) => {
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
    
    
    updateAboutUSImageById: (req, res) => {
      let file = req.file;
      const id = req.params.id;
      updateAboutUSImageById(id, file, (err, results) => {
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
  
    updateAboutUSById: (req, res) => {
      const body = req.body;
      const id = req.params.id;
      updateAboutUSById(id, body, (err, results) => {
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

    deleteAboutUSById: (req, res) => {
      const id = req.params.id;
      deleteAboutUSById(id, (err) => {
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

    deleteAllAboutUS: (req, res) => {
      deleteAllAboutUS((err,result) => {
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
  