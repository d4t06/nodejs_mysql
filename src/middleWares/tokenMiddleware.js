const jwt = require("jsonwebtoken");

module.exports = async function (req, res, next) {
   console.log("token middleware passed");
   if (!req.headers.authorization) return res.sendStatus(401)
   const token = req.headers.authorization.split(" ")[1];

   try {
      const userInfo = jwt.verify(token, "nguyenhuudat");
      if (userInfo) {
         req.userInfo = userInfo; //id, username, role_code
         next();
      }
   } catch (error) {
      res.sendStatus(403)
   }
};
