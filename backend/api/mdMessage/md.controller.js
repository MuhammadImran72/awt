const {
   getMDMessage,
   addMDMessage,
   deleteMDMessage,
   updateMdImageById,
   updateMdMessageById
   
  } = require("./md.service");
  module.exports = {
    addMDMessage: (req, res) => {
      var body = req.body;
      deleteMDMessage((err,result) => {
        if (err) {
          return res.json({
            success: 0,
            message: "Database conection error",
            error:err
          });
        }
        
        addMDMessage(body).then((results)=>
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



      });
      
    },
  

    getMDMessage: (req, res) => {
      getMDMessage((err, results) => {
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
    
    
    updateMdImageById: (req, res) => {
      let file = req.file;
      const id = req.params.id;
      updateMdImageById(id, file, (err, results) => {
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
   
    updateMdMessageById: (req, res) => {
      const body = req.body;
      const id = req.params.id;
      updateMdMessageById(id, body, (err, results) => {
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
            message: "MD Message updated successfully",
          });
        });
    },
    
  

   

    deleteMDMessage: (req, res) => {
      deleteMDMessage((err,result) => {
          if (err) {
            return res.json({
              success: 0,
              message: "Database conection error",
              error:err
            });
          }
          return res.json({
            success: 1,
            message: "deleted  successfully",
          });
        });
    },

  };
  