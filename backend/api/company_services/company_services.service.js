const pool = require("../../config/database");
const db = process.env.DB_NAME;
module.exports = {
  addCompanyService: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `insert into ${db}.company_services set company_id=?, title=?, description=?, page_title1=?,
          page_title2=?,page_description1=?,page_description2=?,partner_title=?,service_title=?,
          partner_description=?,service_description=?`,
        [
          data.company_id,
          data.title,
          data.description,
          data.page_title1,
          data.page_title2,
          data.page_description1,
          data.page_description2,
          data.partner_title,
          data.service_title,
          data.partner_description,
          data.service_description,
        ],
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
    pool.query(
      `SELECT cs.*,  group_concat(distinct (concat("'id':'",csi.id, "','name':'",csi.name, "','image':'",csi.image,"'}"
     )) SEPARATOR ' ') as images,
      group_concat(distinct (concat("'id':'",css.id, "','title':'",css.title, "','description':'",css.description,"','image':'",css.image,"'}"))
      SEPARATOR ' ') as  services,group_concat(distinct (concat("'id':'",p.id, "','title':'",p.title, "','description':'",
     p.description,"','image':'",p.image,"'}")) SEPARATOR ' ') as partners  
     FROM ${db}.company_services as cs       
     left outer join ${db}.partners as p on cs.id=p.company_service_id     
     left outer join ${db}.cs_services as css on cs.id=css.company_service_id      
     left outer join ${db}.cs_images as csi on cs.id=csi.company_service_id 
      group by cs.id;
      `,
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error, null);
        }
        return callBack(null, results);
      }
    );
  },

  getCompanyServicesById: (id, callBack) => {
    pool.query(
      ` SELECT cs.*,  group_concat(distinct (concat("'id':'",csi.id, "','name':'",csi.name, "','image':'",csi.image,"'}"
      )) SEPARATOR ' ') as images,
       group_concat(distinct (concat("'id':'",css.id, "','title':'",css.title, "','description':'",css.description,"','image':'",css.image,"'}"))
       SEPARATOR ' ') as  services,group_concat(distinct (concat("'id':'",p.id, "','title':'",p.title, "','description':'",
      p.description,"','image':'",p.image,"'}")) SEPARATOR ' ') as partners  
      FROM ${db}.company_services as cs       
      left outer join ${db}.partners as p on cs.id=p.company_service_id     
      left outer join ${db}.cs_services as css on cs.id=css.company_service_id      
      left outer join ${db}.cs_images as csi on cs.id=csi.company_service_id 
     where cs.id=?
      group by cs.id;`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error, null);
        }
        return callBack(null, results);
      }
    );
  },
  updateCompanyImageById: (id, files, callBack) => {
    console.log("our files", files, id);

    files.path = files.path.replace("\\", "/");
    files.path = "https://api.zalimburgers.com/" + files.path;
    pool.query(
      `UPDATE ${db}.cs_images set image=? where id=?`,
      [files.path, id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  addCompanyServicesImagesByCSId: (id, files, callBack) => {
    console.log("our files", files, id);
    let results;
    let name;
    files.forEach((file, i) => {
      file.path = file.path.replace("\\", "/");
      file.path = "https://api.zalimburgers.com/" + file.path;

      if (i == 0) {
        name = "home";
      } else if (i == 1) {
        name = "banner";
      } else if (i == 2) {
        name = "page_image1";
      } else {
        name = "page_image2";
      }

      pool.query(
        `insert into ${db}.cs_images set company_service_id=?,name=?,image=?`,
        [id, name, file.path],
        (error, result, fields) => {
          if (error) {
            return callBack(error);
          }
          results = result;
        }
      );
    });

    return callBack(null, results);
  },

  updateCompanyServiceById: (id, data, callBack) => {
    pool.query(
      `update ${db}.company_services set ` +
        Object.keys(data)
          .map((key) => `${key} = ?`)
          .join(", ") +
        " where id =?",
      [...Object.values(data), id],
      (error, result, fields) => {
        if (error) {
          return callBack(error, null);
        }
        return callBack(null, result);
      }
    );
  },
  deleteCompanyServiceById: (id, callBack) => {
    const deleteQueries = [
      `DELETE FROM ${db}.cs_images WHERE company_service_id = ?`,
      `DELETE FROM ${db}.cs_services WHERE company_service_id = ?`,
      `DELETE FROM ${db}.partners WHERE company_service_id = ?`,
      `DELETE FROM ${db}.company_services WHERE id = ?`,
    ];
    let response = [];
    deleteQueries.forEach((query) => {
      pool.query(`${query}`, [id], (error, results, fields) => {
        if (error) {
          console.log("error occured " + error);
          return callBack(error, null);
        }
        console.log("results are " + results[0]);
        response.push(results[0]);
      });
    });
    return callBack(null, response);

    // pool.query(
    //   `delete from ${db}.company_services where id = ?`,
    //   [id],
    //   (error, results, fields) => {
    //     if (error) {
    //       console.log("error occured "+error)
    //       return callBack(error,null);
    //     }
    //     console.log("results are "+results[0])
    //     return callBack(null,results);
    //   }
    // );
  },
  deleteAllCompanyServices: (callBack) => {
    pool.query(
      `delete from ${db}.company_services`,
      [],
      (error, results, fields) => {
        if (error) {
          console.log("error occured " + err);
          return callBack(error, null);
        }
        console.log("results are " + results[0]);
        return callBack(null, results);
      }
    );
  },

  checkId: (id, callBack) => {
    pool.query(
      `select * from ${db}.company_services where id = ?`,
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
