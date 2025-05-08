const {
  getAllNews,
addNews,
getNewsById,
updateNewsById,
deleteAllNews,
deleteNewsById,
updateNewsImageById
   
  } = require("./news.service");
  module.exports = {
    addNews: (req, res) => {
      const body = req.body;
      addNews(body).then((results)=>
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
  
  
    getNewsById: (req, res) => {
      const id = req.params.id;
      getNewsById(id, (err, results) => {
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

    getAllNews: (req, res) => {
      getAllNews((err, results) => {
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
    
    
    updateNewsImageById: (req, res) => {
      let file = req.file;
      const id = req.params.id;
      updateNewsImageById(id, file, (err, results) => {
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
  
    updateNewsById: (req, res) => {
      const body = req.body;
      const id = req.params.id;
      updateNewsById(id, body, (err, results) => {
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

    deleteNewsById: (req, res) => {
      const id = req.params.id;
      deleteNewsById(id, (err) => {
          if (err) {
            return res.json({
              success: 0,
              message: "Database conection error",
              error:err
            });
          }
          return res.json({
            success: 1,
            message: "News deleted successfully",
          });
        });
    },

    deleteAllNews: (req, res) => {
      deleteAllNews((err,result) => {
          if (err) {
            return res.json({
              success: 0,
              message: "Database conection error",
              error:err
            });
          }
          return res.json({
            success: 1,
            message: "deleted all News  successfully",
          });
        });
    },

  };
  