import express from "express";
import homeController from "../controller/homeController";
import multer from "multer";
import path from "path";
let appRoot = require("app-root-path");
require("dotenv").config();

let router = express.Router();


let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, appRoot + "/src/public/image/");
    },

    // By default, multer removes file extensions so let's add them back
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});


const imageFilter = function (req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};



let upload = multer({ storage: storage, fileFilter: imageFilter });
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
	router.post("/update-user", homeController.updateUser);
	router.get("/edit/user/:userID", homeController.editUser);
	router.post("/delete-user", homeController.deleteUser);
	router.post("/create-new-user", homeController.createNewUser);
	router.get("/detail/user/:userID", homeController.getUserDetail);
	router.get("/uploadFile", homeController.getUploadFile);
	router.post("/fileupload",upload.single('profile_pic'), homeController.handleFilerUpload);
	router.get("/about", (req, res) => {
		res.send(`listen to port ${process.env.PORT}`);
	});
	return app.use("/", router);
};
//
export default initWebRoute;
