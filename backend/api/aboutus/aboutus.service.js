const pool = require("../../config/database");
const db=process.env.DB_NAME
module.exports = {
  addAboutUS: (data) => {
    return new Promise((resolve,reject)=>
    {
      pool.query(
        `insert into ${db}.aboutus set  title = ?, description = ?,year=?,post_date = now()`,
          [
          data.title,
          data.description,
          data.year,
         
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

  
  getAllAboutUS: (callBack) => {
    pool.query(
      `select ab.* from ${db}.aboutus ab where 1=1 order by ab.year asc`,
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error,null);
        }
        return callBack(null, results);
      }
    );
  },

  getAboutUSById: (id, callBack) => {
    pool.query(
      `select * from ${db}.aboutus where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error,null);
        }
        return callBack(null, results[0]);
      }
    );
  },
 
  updateAboutUSImageById: (id, files, callBack) => {
    console.log('our files',files,id)
    
    files.path = files.path.replace("\\", "/");
   
    pool.query(
      `UPDATE ${db}.aboutus set image=? where id=?`,
      [files.path,id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
 
  },

  updateAboutUSById: (id,data, callBack) => {
    pool.query(
      `update ${db}.aboutus set `+Object.keys(data).map(key => `${key} = ?`).join(", ") +" where id =?",
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
  deleteAboutUSById: (id, callBack) => {
    pool.query(
      `delete from ${db}.aboutus where id = ?`,
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
  deleteAllAboutUS: (callBack) => {
    pool.query(
      `delete from ${db}.aboutus`,
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