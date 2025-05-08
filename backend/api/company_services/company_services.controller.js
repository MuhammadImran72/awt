const {
  getAllCompanies,
  addCompanyService,
  getCompanyServicesById,
  updateCompanyImageById,
  deleteAllCompanyServices,
  updateCompanyServiceById,
  deleteCompanyServiceById,
  addCompanyServicesImagesByCSId,
  checkId,
} = require("./company_services.service");
module.exports = {
  addCompanyService: (req, res) => {
    const body = req.body;
    addCompanyService(body)
      .then((results) => {
        return res.status(200).json({
          success: 1,
          data: results,
        });
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
          error: err,
        });
      });
  },

  getCompanyServicesById: (req, res) => {
    const id = req.params.id;
    getCompanyServicesById(id, (err, results) => {
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

      if (results) {
        results.forEach((item) => {
          var images = [];
          var services = [];
          var partners = [];
          var tempImages = item.images ? item.images.split("}") : [];
          var tempServices = item.services ? item.services.split("}") : [];
          var tempPartners = item.partners ? item.partners.split("}") : [];

          console.log(tempImages);

          tempImages.forEach((combination, i) => {
            if (tempImages.length - 1 == i) {
            } else {
              let j = "{" + combination + "}";

              console.log(j);
              j = j.replace(/'/g, '"');

              j = JSON.parse(j);
              j.id = parseInt(j.id);
              images.push(j);
            }
          });

          tempServices.forEach((combination, i) => {
            if (tempServices.length - 1 == i) {
            } else {
              let j = "{" + combination + "}";

              j = j.replace(/\b'\b/g, "%mytag%");
              j = j.replace(/'/g, '"');

              j = JSON.parse(j);
              let title = j.title.replace(/%mytag%/g, "'");
              let desc = j.description.replace(/%mytag%/g, "'");
              j.title = title;
              j.description = desc;
              services.push(j);
            }
          });

          tempPartners.forEach((combination, i) => {
            if (tempPartners.length - 1 == i) {
            } else {
              let j = "{" + combination + "}";

              j = j.replace(/\b'\b/g, "%mytag%");
              j = j.replace(/'/g, '"');

              j = JSON.parse(j);
              let title = j.title.replace(/%mytag%/g, "'");
              let desc = j.description.replace(/%mytag%/g, "'");
              j.title = title;
              j.description = desc;
              partners.push(j);
            }
          });
          item["images"] = images;
          item["services"] = services;
          item["partners"] = partners;
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

      if (results) {
        results.forEach((item) => {
          var images = [];
          var services = [];
          var partners = [];
          var tempImages = item.images ? item.images.split("}") : [];
          var tempServices = item.services ? item.services.split("}") : [];
          var tempPartners = item.partners ? item.partners.split("}") : [];

          console.log(tempImages);

          tempImages.forEach((combination, i) => {
            if (tempImages.length - 1 == i) {
            } else {
              let j = "{" + combination + "}";

              console.log(j);
              j = j.replace(/'/g, '"');

              j = JSON.parse(j);
              j.id = parseInt(j.id);
              images.push(j);
            }
          });

          tempServices.forEach((combination, i) => {
            if (tempServices.length - 1 == i) {
            } else {
              let j = "{" + combination + "}";

              j = j.replace(/\b'\b/g, "%mytag%");
              j = j.replace(/'/g, '"');

              j = JSON.parse(j);
              let title = j.title.replace(/%mytag%/g, "'");
              let desc = j.description.replace(/%mytag%/g, "'");
              j.title = title;
              j.description = desc;
              services.push(j);
            }
          });

          tempPartners.forEach((combination, i) => {
            if (tempPartners.length - 1 == i) {
            } else {
              let j = "{" + combination + "}";

              j = j.replace(/\b'\b/g, "%mytag%");
              j = j.replace(/'/g, '"');

              j = JSON.parse(j);
              let title = j.title.replace(/%mytag%/g, "'");
              let desc = j.description.replace(/%mytag%/g, "'");
              j.title = title;
              j.description = desc;
              partners.push(j);
            }
          });
          item["images"] = images;
          item["services"] = services;
          item["partners"] = partners;
        });
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },

  updateCompanyImageById: (req, res) => {
    let file = req.file;
    const id = req.params.id;
    updateCompanyImageById(id, file, (err, results) => {
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

  addCompanyServicesImagesByCSId: (req, res) => {
    let files = req.files;
    const id = req.params.id;
    addCompanyServicesImagesByCSId(id, files, (err, results) => {
      if (err) {
        return res.status(500).json({
          success: 0,
          message: err,
        });
      }

      return res.status(200).json({
        success: 1,
        message: "Images Added Successfully",
      });
    });
  },

  updateCompanyServiceById: (req, res) => {
    const body = req.body;
    const id = req.params.id;
    updateCompanyServiceById(id, body, (err, results) => {
      if (err) {
        console.log(err);
        return res.json({
          success: 0,
          message: "database connection error",
          error: err,
        });
      }
      return res.json({
        success: 1,
        message: "service updated successfully",
      });
    });
  },

  deleteCompanyServiceById: (req, res) => {
    const id = req.params.id;

    checkId(id, (err, results) => {
      if (err) {
        return res.json({
          success: 0,
          message: "Database conection error",
          error: err,
        });
      }

      if (results) {
        deleteCompanyServiceById(id, (err) => {
          if (err) {
            return res.json({
              success: 0,
              message: "Database conection error",
              error: err,
            });
          }
          return res.json({
            success: 1,
            message: "Service deleted successfully",
          });
        });
      } else {
        return res.json({
          success: 1,
          message: "No Record Exists Against this Id",
        });
      }
    });
  },

  deleteAllCompanyServices: (req, res) => {
    deleteAllCompanyServices((err, result) => {
      if (err) {
        return res.json({
          success: 0,
          message: "Database conection error",
          error: err,
        });
      }
      return res.json({
        success: 1,
        message: "deleted all company services successfully",
      });
    });
  },
};
