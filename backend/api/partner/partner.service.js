const pool = require("../../config/database");
const db=process.env.DB_NAME
module.exports = {
  addPartner: (data) => {
    return new Promise((resolve,reject)=>
    {
      pool.query(
        `insert into ${db}.partners set company_service_id=?, title=?, description=?, image=?`,
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

  
  getAllPartners: (callBack) => {
    pool.query(
      `select * from ${db}.partners`,
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error,null);
        }
        return callBack(null, results);
      }
    );
  },

  getAllPartnersByCompanyId: (id, callBack) => {
    pool.query(
      `select * from ${db}.partners where company_service_id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error,null);
        }
        return callBack(null, results);
      }
    );
  },
  
  getPartnerById: (id, callBack) => {
    pool.query(
      `select * from ${db}.partners where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error,null);
        }
        return callBack(null, results[0]);
      }
    );
  },
 
  updatePartnerImageById: (id, files, callBack) => {
    console.log('our files',files,id)
    
    files.path = files.path.replace("\\", "/");
    files.path = "https://api.zalimburgers.com/"+files.path;
   
    pool.query(
      `UPDATE ${db}.partners set image=? where id=?`,
      [files.path,id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
 
  },

  updatePartnerById: (id,data, callBack) => {
    pool.query(
      `update ${db}.partners set `+Object.keys(data).map(key => `${key} = ?`).join(", ") +" where id =?",
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
  deleteAllPartnersByCompanyId: (id, callBack) => {
    pool.query(
      `delete from ${db}.partners where company_service_id = ?`,
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
  deletePartnerById: (id, callBack) => {
    pool.query(
      `delete from ${db}.partners where id = ?`,
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
  deleteAllPartners: (callBack) => {
    pool.query(
      `delete from ${db}.partners`,
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