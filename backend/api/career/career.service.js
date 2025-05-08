const pool = require("../../config/database");
const db=process.env.DB_NAME
module.exports = {
  addCareer: (data) => {
    return new Promise((resolve,reject)=>
    {
      pool.query(
        `insert into ${db}.career set  title = ?, author = ?, post_date = now(), content = ?`,
          [
          data.title,
          data.author,
          data.content,
          
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

  
  getAllCareer: (callBack) => {
    pool.query(
      `select * from ${db}.career`,
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error,null);
        }
        return callBack(null, results);
      }
    );
  },

  getCareerById: (id, callBack) => {
    pool.query(
      `select * from ${db}.career where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error,null);
        }
        return callBack(null, results[0]);
      }
    );
  },
 
  updateCareerImageById: (id, files, callBack) => {
    console.log('our files',files,id)
    
    files.path = files.path.replace("\\", "/");
   
    pool.query(
      `UPDATE ${db}.career set image=? where id=?`,
      [files.path,id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
 
  },

  updateCareerById: (id,data, callBack) => {
    pool.query(
      `update ${db}.career set `+Object.keys(data).map(key => `${key} = ?`).join(", ") +" where id =?",
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
  deleteCareerById: (id, callBack) => {
    pool.query(
      `delete from ${db}.career where id = ?`,
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
  deleteAllCareer: (callBack) => {
    pool.query(
      `delete from ${db}.career`,
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