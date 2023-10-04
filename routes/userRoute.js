const express = require("express");
const userRouter = express.Router();

const userController = require("../controller/userController.js");

userRouter.get("/user", userController.getAllUser);

userRouter.get("/user/:id", userController.getUserById);

userRouter.post("/register", userController.addUser);
userRouter.delete("/user/:id", userController.deleteUser);
userRouter.post("/login", userController.login);

module.exports = userRouter;

// userRouter.post('/login', function(req, res, next) {
//     if (req.body.email == "" || req.body.password == "") {
//         res.status(400).json({
//             message: "EMPTY FIELD"
//         })
//         return
//     }

//     userDb.findOne({
//             where: {
//                 email: req.body.email,
//                 password: req.body.password
//             }
//         })
//         .then(function(data) {
//             res.status(200).json({
//                 message: "success login",
//                 data: data
//             })
//         })
//         .catch(function(err) {
//             console.log(err)
//             res.status(500).json({
//                 message: err
//             })
//         })
// });

// userRouter.delete('/del-account', function(req, res, next) {
//     userDb.destroy({
//             where: {
//                 id: req.body.user_id
//             }
//         }).then(function() {
//             res.status(200).json({
//                 message: "akun dihapus"
//             })
//         })
//         .catch(function(err) {
//             console.log(err)
//             res.status(500).json({
//                 message: err
//             })
//         })
// });
