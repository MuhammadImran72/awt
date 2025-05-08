const {
  addUser,
  getUserByUserName
 
  } = require("./user.service");

const { hashSync, genSaltSync, compareSync } = require("bcryptjs");
const jwt = require("jsonwebtoken");

  module.exports = {
   
    signUp: (req, res) => {
      const body = req.body;
      
  
      getUserByUserName(body.username, (err, result) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection error",
            error: err,
          });
        }
        if (result) {
          return res.status(500).json({
            success: 0,
            message: "UserName already exists",
          });
        } else {
          const salt = genSaltSync(10);
          body.password = hashSync(body.password, salt);
          addUser(body, (err, results) => {
            if (err) {
              return res.status(500).json({
                success: 0,
                message: "Database Connection Error adding User",
                error: err,
              });
            }

            const token_payload = {
              id: results.insertId,
              username: results.username,
              type: "admin",
              
            };
           
            
              const jsontoken = jwt.sign(
                { result: token_payload },
                process.env.JWT_KEY,
                {
                  expiresIn: "1h",
                }
              );
  
            
              return res.status(200).json({
                success: 1,
                message:
                  "User Added Successfully .",
                token: jsontoken,
               
              });
           
          });
        }
      });
    },
    

    login: (req, res) => {
      const body = req.body;
     
      getUserByUserName(body.username, (err, results) => {
        if (err) {
          return res.status(500).json({
            success: 0,
            error: err,
            message: "Database error while checking the UserName",
          });
        }
        if (!results) {
          return res.json({
            success: 0,
            message: "Account not exist",
          });
        }
        const salt = genSaltSync(10);
        //body.password = hashSync(body.password, salt);
   
        const result = compareSync(body.password, results.password);
        console.log('rts',result)
        if (result) {
        
          results.password = undefined;
          const token_payload = {
            id: results.id,
            username: results.username,
            type: "admin",
            
          };
          res.locals.currentUser = token_payload;
          if (result.savePassword) {
            const jsontoken = jwt.sign(
              { result: token_payload },
              process.env.JWT_KEY,
              {
                expiresIn: "1h",
              }
            );
            res.locals.currentUser = token_payload;
            return res.json({
              success: 1,
              message: "login successfully",
              token: jsontoken,
            });
          } else {
            const jsontoken = jwt.sign(
              { result: token_payload },
              process.env.JWT_KEY,
              {
                expiresIn: "121334456h",
              }
            );
            return res.json({
              success: 1,
              message: "login successfully",
              token: jsontoken,
            });
          }
        } else {
          return res.json({
            success: 0,
            message: "Invalid username or password",
          });
        }
      });
    }
  
  };
  