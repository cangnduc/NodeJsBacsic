import connection from "../configs/connectDB";

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
module.exports = {
	getHomePage,
};
