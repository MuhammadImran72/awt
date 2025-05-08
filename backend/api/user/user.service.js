const pool = require("../../config/database");
const db=process.env.DB_NAME
module.exports = {
  

  
  addUser: (data, callBack) => {
    pool.query(
      `insert into ${db}.user set username=?, password=? ,created_at = now()`,
      [data.username, data.password],
      (error, results, fields) => {
        if (error) {
          return callBack(error, null);
        }
        return callBack(null, results);
      }
    );
  },

  getUserByUserName: (email, callBack) => {
    pool.query(
      `select * from ${db}.user where username = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          return callBack(error, null);
        }
        return callBack(null, results[0]);
      }
    );
  },



};