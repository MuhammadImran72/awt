const pool = require("../../config/database");
const db=process.env.DB_NAME
module.exports = {
  addSlider: (data) => {
    return new Promise((resolve,reject)=>
    {
      pool.query(
        `insert into ${db}.slider set  title = ?, description = ?, image = ?,post_date = now()`,
          [
          data.title,
          data.description,
          null,
          
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

  
  getAllSliders: (callBack) => {
    pool.query(
      `select * from ${db}.slider`,
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error,null);
        }
        return callBack(null, results);
      }
    );
  },

  getSliderById: (id, callBack) => {
    pool.query(
      `select * from ${db}.slider where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error,null);
        }
        return callBack(null, results[0]);
      }
    );
  },
 
  updateSliderImageById: (id, files, callBack) => {

    
    files.path = files.path.replace("\\", "/");
   
    pool.query(
      `UPDATE ${db}.slider set image=? where id=?`,
      [files.path,id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
 
  },

  updateSliderById: (id,data, callBack) => {
    pool.query(
      `update ${db}.slider set `+Object.keys(data).map(key => `${key} = ?`).join(", ") +" where id =?",
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
  
  deleteSliderById: (id, callBack) => {
    pool.query(
      `delete from ${db}.slider where id = ?`,
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
  // deleteAllSliders: (callBack) => {
  //   pool.query(
  //     `delete from ${db}.slider`,
  //     [],
  //     (error, results, fields) => {
  //       if (error) {
  //         console.log("error occured "+err)
  //         return callBack(error,null);
  //       }
  //       console.log("results are "+results[0])
  //       return callBack(null,results);
  //     }
  //   );
  // },



};