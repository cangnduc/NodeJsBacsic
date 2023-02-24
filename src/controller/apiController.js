import connection from "../configs/connectDB";
import conection from "../configs/connectDB";
let getAllUser = async (req, res) => {
	const [rows, fields] = await connection.execute("select * from users");
	return res.status(200).json({
		message: "ok",
		data: rows,
	});
};
let createUser = async (req, res) => {
	let { firstName, lastName, email, address } = req.body;
	if (!firstName || !lastName || !email || !address) {
		return res.status(200).json({
			message: "missing required data",
		});
	}
	await connection.execute(
		"insert into users(firstName,lastName,email,address) values(?,?,?,?)",
		[firstName, lastName, email, address]
	);
	return res.status(200).json({
		message: "ok",
	});
};
let updateUser = async (req, res) => {
	let { firstName, lastName, email, address, ID } = req.body;
	if (!firstName || !lastName || !email || !address || !ID) {
		return res.status(200).json({
			message: "missing required data",
		});
	}
	await connection.execute(
		"update users set firstName=?, lastName=?,email = ?,address=? where ID =?",
		[firstName, lastName, email, address, ID]
	);
	return res.status(200).json({
		message: "ok",
	});
};
let deleteUser = async (req, res) => {
	let id = req.params.ID;
	if (!id) {
		return res.status(200).json({
			message: "missing ID",
		});
	}
	await conection.execute("delete from users where ID =?", [id]);
	return res.status(200).json({
		message: "delete successful",
	});
};
module.exports = {
	updateUser,
	getAllUser,
	createUser,
	deleteUser,
};

//https://happykaraoke.kasco.vn/kas/Report/ExportExcel?Type=74&sitelist=&fromDate=2022-12-01%2000:00&toDate=2023-02-24%2023:59&fromTime=00:00&toTime=23:59&status=-1&listArea=
