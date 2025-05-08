const pool = require("../../config/database");
const db = process.env.DB_NAME;
module.exports = {
  getAllImages: (callBack) => {
    pool.query(`select * from ${db}.gallery`, [], (error, results, fields) => {
      if (error) {
        return callBack(error, null);
      }
      return callBack(null, results);
    });
  },

  addImage: (files, callBack) => {
    let results;
    files.forEach((file) => {
      file.path = file.path.replace("\\", "/");
      file.path = "https://api.zalimburgers.com/" + file.path;

      pool.query(
        `insert into ${db}.gallery set image=? `,
        [file.path],
        (error, result, fields) => {
          if (error) {
            return callBack(error);
          }
          results = result;
        }
      );
    });

    return callBack(null, results);
  },

  deleteImageById: (id, callBack) => {
    pool.query(
      `delete from ${db}.gallery where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          console.log("error occured " + error);
          return callBack(error, null);
        }
        console.log("results are " + results[0]);
        return callBack(null, results);
      }
    );
  },
  deleteAllImages: (callBack) => {
    pool.query(`delete from ${db}.gallery`, [], (error, results, fields) => {
      if (error) {
        console.log("error occured " + err);
        return callBack(error, null);
      }
      console.log("results are " + results[0]);
      return callBack(null, results);
    });
  },
};
