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
   
  } = require("./partner.service");
  module.exports = {
    addPartner: (req, res) => {
      const body = req.body;
      addPartner(body).then((results)=>
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
  
    getAllPartnersByCompanyId: (req, res) => {
      const id = req.params.id;
      getAllPartnersByCompanyId(id, (err, results) => {
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
  
    getPartnerById: (req, res) => {
      const id = req.params.id;
      getPartnerById(id, (err, results) => {
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

    getAllPartners: (req, res) => {
      getAllPartners((err, results) => {
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
    
    
    updatePartnerImageById: (req, res) => {
      let file = req.file;
      const id = req.params.id;
      updatePartnerImageById(id, file, (err, results) => {
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
  
    updatePartnerById: (req, res) => {
      const body = req.body;
      const id = req.params.id;
      updatePartnerById(id, body, (err, results) => {
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
            message: "Partner updated successfully",
          });
        });
    },

    deleteAllPartnersByCompanyId: (req, res) => {
      const id = req.params.id;
      deleteAllPartnersByCompanyId(id, (err) => {
          if (err) {
            return res.json({
              success: 0,
              message: "Database conection error",
              error:err
            });
          }
          return res.json({
            success: 1,
            message: "Partners deleted successfully",
          });
        });
    },

    deletePartnerById: (req, res) => {
      const id = req.params.id;
      deletePartnerById(id, (err) => {
          if (err) {
            return res.json({
              success: 0,
              message: "Database conection error",
              error:err
            });
          }
          return res.json({
            success: 1,
            message: "Partners deleted successfully",
          });
        });
    },
    deleteAllPartners: (req, res) => {
      deleteAllPartners((err,result) => {
          if (err) {
            return res.json({
              success: 0,
              message: "Database conection error",
              error:err
            });
          }
          return res.json({
            success: 1,
            message: "deleted all Partners  successfully",
          });
        });
    },

  };
  