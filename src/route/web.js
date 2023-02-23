import express from "express";
import homeController from "../controller/homeController";
require("dotenv").config();

let router = express.Router();
const initWebRoute = (app) => {
	// render tu home controller
	router.get("/", homeController.getHomePage);
	// render truc tiep
	// router.get("/", (req, res) => {
	// 	res.render("index.ejs");
	// });
	///
	// GET POST PUT DELETE
	//  R    C   U    D
	router.post('/update-user',homeController.updateUser)
	router.get("/edit/user/:userID",homeController.editUser)
	router.post("/delete-user",homeController.deleteUser)
	router.post("/create-new-user",homeController.createNewUser)
	router.get("/detail/user/:userID",homeController.getUserDetail);
	router.get("/about", (req, res) => {
		res.send(`listen to port ${process.env.PORT}`);
	});
	return app.use("/", router);
};
//
export default initWebRoute;
