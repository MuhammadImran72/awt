const pool = require("../../config/database");
const db=process.env.DB_NAME
module.exports = {
  addMDMessage: (data) => {
    return new Promise((resolve,reject)=>
    {
      pool.query(
        `insert into ${db}.md_message set  ranking = ?, post = ?, image = ?,message = ?`,
          [
          data.rank,
          data.post,
          data.image,
          data.message
          
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

  
  getMDMessage: (callBack) => {
    pool.query(
      `select * from ${db}.md_message`,
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error,null);
        }
        return callBack(null, results[0]);
      }
    );
  },

  updateMdMessageById: (id,data, callBack) => {
    pool.query(
      `update ${db}.md_message set `+Object.keys(data).map(key => `${key} = ?`).join(", ") +" where id =?",
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
 
  updateMdImageById: (id, files, callBack) => {

    
    files.path = files.path.replace("\\", "/");
   
    pool.query(
      `UPDATE ${db}.md_message set image=? where id=?`,
      [files.path,id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
 
  },

  // updateCareerById: (id,data, callBack) => {
  //   pool.query(
  //     `update ${db}.slider set `+Object.keys(data).map(key => `${key} = ?`).join(", ") +" where id =?",
  //       [
  //         ...Object.values(data),
  //         id
  //     ],
  //     (error, result, fields) => {
  //       if (error) {
  //         return callBack(error,null);
  //       }
  //       return callBack(null, result);
  //     }
  //   );
  // },
  // deleteSliderById: (id, callBack) => {
  //   pool.query(
  //     `delete from ${db}.slider where id = ?`,
  //     [id],
  //     (error, results, fields) => {
  //       if (error) {
  //         console.log("error occured "+error)
  //         return callBack(error,null);
  //       }
  //       console.log("results are "+results[0])
  //       return callBack(null,results);
  //     }
  //   );
  // },
  deleteMDMessage: (callBack) => {
    pool.query(
      `delete  from ${db}.md_message`,
      [],
      (error, results, fields) => {
        if (error) {
         
          return callBack(error,null);
        }
        console.log("results are "+results[0])
        return callBack(null,results);
      }
    );
  },



};