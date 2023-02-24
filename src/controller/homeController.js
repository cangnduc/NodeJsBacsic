import connection from "../configs/connectDB";
import multer from "multer";
let getUserDetail = async (req, res) => {
	const [rows, fields] = await connection.execute(
		"SELECT * from `users` where ID =?",
		[req.params.userID]
	);

	return res.send(JSON.stringify(rows));
};
let createNewUser = async (req, res) => {
	const { firstName, lastName, email, address } = req.body;

	await connection.execute(
		"insert into users(firstName,lastName,email,address) values(?,?,?,?)",
		[firstName, lastName, email, address]
	);
	return res.redirect("/");
	//return res.send("da nhan tin hieu");
};
let getHomePage = async (req, res) => {
	const [rows, fields] = await connection.execute("SELECT * from `users`");
	// connection.query("SELECT * FROM `users`", function (err, results, fields) {
	// 	data = results.map((re) => re);
	return res.render("index.ejs", { userData: rows });
	//     return res.render("index.ejs", { data: JSON.stringify(results) });
	// 	// results contains rows returned by server
	// 	//console.log(fields); // fields contains extra meta data about results, if available
	// });
	//viet logic here
};
let deleteUser = async (req, res) => {
	let userID = req.body.userID;
	await connection.execute("delete from users where ID =?", [userID]);
	return res.redirect("/");
	//return res.send("delete successfull")
};
let editUser = async (req, res) => {
	const [user, fields] = await connection.execute(
		"select * from users where ID =?",
		[req.params.userID]
	);

	return res.render("updateUser.ejs", { user: user[0], test: "232424" });
};
let updateUser = async (req, res) => {
	const { firstName, lastName, email, address, ID } = req.body;

	await connection.execute(
		"update users set firstName=?, lastName=?,email = ?,address=? where ID =?",
		[firstName, lastName, email, address, ID]
	);
	return res.redirect("/");
};
let getUploadFile = (req, res) => {
	return res.render("uploadFile.ejs", {
		title: "File Upload in Node JS Express using Multer",
	});
};
const upload = multer().single("profile_pic");
let handleFilerUpload = async (req, res) => {
	upload(req, res, function (err) {
		// req.file contains information of uploaded file
		// req.body contains information of text fields, if there were any

		if (req.fileValidationError) {
			return res.send(req.fileValidationError);
		} else if (!req.file) {
			return res.send("Please select an image to upload");
		} else if (err instanceof multer.MulterError) {
			return res.send(err);
		} else if (err) {
			return res.send(err);
		}

		// Display uploaded image for user validation
		res.send(
			`You have uploaded this image: <hr/><img src="/image/${req.file.filename}" width="500"><hr /><a href="/uploadFile">Upload another image</a>`
		);
	});
};
module.exports = {
	getUploadFile,
	getHomePage,
	getUserDetail,
	createNewUser,
	deleteUser,
	updateUser,
	editUser,
	handleFilerUpload,
};
