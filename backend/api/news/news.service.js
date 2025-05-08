const pool = require("../../config/database");
const db=process.env.DB_NAME
module.exports = {
  addNews: (data) => {
    return new Promise((resolve,reject)=>
    {
      pool.query(
        `insert into ${db}.news set  title=?, description=?, image=?`,
          [
          data.title,
          data.description,
          data.image
        ],
        (error, results, fields) => {
          if (error) {
            reject ({err:error})
            console.log(error)
          }
          resolve ({results:results})
        }
      );

    })
  },

  
  getAllNews: (callBack) => {
    pool.query(
      `select * from ${db}.news`,
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error,null);
        }
        return callBack(null, results);
      }
    );
  },

  getNewsById: (id, callBack) => {
    pool.query(
      `select * from ${db}.news where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error,null);
        }
        return callBack(null, results[0]);
      }
    );
  },
 
  updateNewsImageById: (id, files, callBack) => {
    console.log('our files',files,id)
    
    files.path = files.path.replace("\\", "/");
   
    pool.query(
      `UPDATE ${db}.news set image=? where id=?`,
      [files.path,id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
 
  },

  updateNewsById: (id,data, callBack) => {
    pool.query(
      `update ${db}.news set `+Object.keys(data).map(key => `${key} = ?`).join(", ") +" where id =?",
        [
          ...Object.values(data),
          id
      ],
      (error, result, fields) => {
        if (error) {
          return callBack(error,null);
        }
        return callBack(null, result);
      }
    );
  },
  deleteNewsById: (id, callBack) => {
    pool.query(
      `delete from ${db}.news where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          console.log("error occured "+error)
          return callBack(error,null);
        }
        console.log("results are "+results[0])
        return callBack(null,results);
      }
    );
  },
  deleteAllNews: (callBack) => {
    pool.query(
      `delete from ${db}.news`,
      [],
      (error, results, fields) => {
        if (error) {
          console.log("error occured "+err)
          return callBack(error,null);
        }
        console.log("results are "+results[0])
        return callBack(null,results);
      }
    );
  },



};