const {
  getAllCompanies,
  addCompany,
  getCompanyById,
} = require("./company.service");
module.exports = {
  addCompany: (req, res) => {
    const body = req.body;
    addCompany(body)
      .then((results) => {
        return res.status(200).json({
          success: 1,
          data: results,
        });
      })
      .catch((err) => {
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
          error: err,
        });
      });
  },

  getCompanyById: (req, res) => {
    const id = req.params.id;
    getCompanyById(id, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection errror",
          error: err,
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

  getAllCompanies: (req, res) => {
    getAllCompanies((err, results) => {
      if (err) {
        return res.status(500).json({
          success: 0,
          message: "Database connection errror",
          error: err,
        });
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
};
