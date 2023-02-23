import connection from "../configs/connectDB";
let getUserDetail = async (req, res) => {
	const [rows, fields] = await connection.execute(
		"SELECT * from `users` where ID =?",
		[req.params.userID]
	);

	return res.send(JSON.stringify(rows));
};
let createNewUser = async (req, res) => {
	const { firstName, lastName, email, address } = req.body;
	console.log(req.body);

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

	)
	return res.redirect("/");
};
module.exports = {
	getHomePage,
	getUserDetail,
	createNewUser,
	deleteUser,
	updateUser,
	editUser,
};
