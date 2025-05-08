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
   
  } = require("./service.service");
  module.exports = {
    addService: (req, res) => {
      const body = req.body;
      addService(body).then((results)=>
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
  
    getAllServicesByCompanyId: (req, res) => {
      const id = req.params.id;
      getAllServicesByCompanyId(id, (err, results) => {
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
  
    getServiceById: (req, res) => {
      const id = req.params.id;
      getServiceById(id, (err, results) => {
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

    getAllServices: (req, res) => {
      getAllServices((err, results) => {
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
    
    
    updateServiceImageById: (req, res) => {
      let file = req.file;
      const id = req.params.id;
      updateServiceImageById(id, file, (err, results) => {
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
  
    updateServiceById: (req, res) => {
      const body = req.body;
      const id = req.params.id;
      updateServiceById(id, body, (err, results) => {
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

    deleteAllServicesByCompanyId: (req, res) => {
      const id = req.params.id;
      deleteAllServicesByCompanyId(id, (err) => {
          if (err) {
            return res.json({
              success: 0,
              message: "Database conection error",
              error:err
            });
          }
          return res.json({
            success: 1,
            message: "Services deleted successfully",
          });
        });
    },

    deleteServiceById: (req, res) => {
      const id = req.params.id;
      deleteServiceById(id, (err) => {
          if (err) {
            return res.json({
              success: 0,
              message: "Database conection error",
              error:err
            });
          }
          return res.json({
            success: 1,
            message: "Services deleted successfully",
          });
        });
    },
    deleteAllServices: (req, res) => {
      deleteAllServices((err,result) => {
          if (err) {
            return res.json({
              success: 0,
              message: "Database conection error",
              error:err
            });
          }
          return res.json({
            success: 1,
            message: "deleted all Services  successfully",
          });
        });
    },

  };
  