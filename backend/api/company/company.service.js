const pool = require("../../config/database");
const db = process.env.DB_NAME;
module.exports = {
  addComapny: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `insert into ${db}.company set name=?`,
        [data.name],
        (error, results, fields) => {
          if (error) {
            reject({ err: error });
            console.log(error);
          }
          resolve({ results: results });
        }
      );
    });
  },

  getAllCompanies: (callBack) => {
    pool.query(`select * from ${db}.company`, [], (error, results, fields) => {
      if (error) {
        return callBack(error, null);
      }
      return callBack(null, results);
    });
  },
  getCompanyById: (id, callBack) => {
    pool.query(
      `select * from ${db}.company where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error, null);
        }
        return callBack(null, results[0]);
      }
    );
  },
};
