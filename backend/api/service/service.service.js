const pool = require("../../config/database");
const db=process.env.DB_NAME
module.exports = {
  addService: (data) => {
    return new Promise((resolve,reject)=>
    {
      pool.query(
        `insert into ${db}.cs_services set company_service_id=?, title=?, description=?, image=?`,
          [
          data.company_service_id,
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

  
  getAllServices: (callBack) => {
    pool.query(
      `select * from ${db}.cs_services`,
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error,null);
        }
        return callBack(null, results);
      }
    );
  },

  getAllServicesByCompanyId: (id, callBack) => {
    pool.query(
      `select * from ${db}.cs_services where company_service_id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error,null);
        }
        return callBack(null, results);
      }
    );
  },
  
  getServiceById: (id, callBack) => {
    pool.query(
      `select * from ${db}.cs_services where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error,null);
        }
        return callBack(null, results[0]);
      }
    );
  },
 
  updateServiceImageById: (id, files, callBack) => {
    console.log('our files',files,id)
    
    files.path = files.path.replace("\\", "/");
    files.path = "https://api.zalimburgers.com/"+files.path;
   
    pool.query(
      `UPDATE ${db}.cs_services set image=? where id=?`,
      [files.path,id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
 
  },

  updateServiceById: (id,data, callBack) => {
    pool.query(
      `update ${db}.cs_services set `+Object.keys(data).map(key => `${key} = ?`).join(", ") +" where id =?",
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
  deleteAllServicesByCompanyId: (id, callBack) => {
    pool.query(
      `delete from ${db}.cs_services where company_service_id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          console.log("error occured "+error)
          return callBack(error,null);
        }
        console.log("results are "+results)
        return callBack(null,results);
      }
    );
  },
  deleteServiceById: (id, callBack) => {
    pool.query(
      `delete from ${db}.cs_services where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          console.log("error occured "+error)
          return callBack(error,null);
        }
        console.log("results are "+results)
        return callBack(null,results);
      }
    );
  },
  deleteAllServices: (callBack) => {
    pool.query(
      `delete from ${db}.cs_services`,
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