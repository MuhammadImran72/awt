const pool = require("../../config/database");
const db=process.env.DB_NAME
module.exports = {
  addBOD: (data) => {
    return new Promise((resolve,reject)=>
    {
      pool.query(
        `insert into ${db}.bod set  name = ?, post = ?,role=?,category=?, image = ?,post_date = now()`,
          [
          data.name,
          data.post,
          data.role,
          data.category,
          null
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

  
  getAllBOD: (callBack) => {
    pool.query(
      `select * from ${db}.bod`,
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error,null);
        }
        return callBack(null, results);
      }
    );
  },

  getBODById: (id, callBack) => {
    pool.query(
      `select * from ${db}.bod where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error,null);
        }
        return callBack(null, results[0]);
      }
    );
  },
 
  updateBODImageById: (id, files, callBack) => {
    console.log('our files',files,id)
    
    files.path = files.path.replace("\\", "/");
   
    pool.query(
      `UPDATE ${db}.bod set image=? where id=?`,
      [files.path,id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
 
  },

  updateBODById: (id,data, callBack) => {
    pool.query(
      `update ${db}.bod set `+Object.keys(data).map(key => `${key} = ?`).join(", ") +" where id =?",
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
  deleteBODById: (id, callBack) => {
    pool.query(
      `delete from ${db}.bod where id = ?`,
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
  deleteAllBOD: (callBack) => {
    pool.query(
      `delete from ${db}.bod`,
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