import bcrypt from "bcryptjs";

const users = [
	{
		fullName: "Admin User",
		username: "admin",
		email: "admin@example.com",
		biodata:
			"A developer, passionate about using technoligies to solve problems",
		country: "Nigeria",
		occupation: "Web Developer",
		website: "https://example.com",
		password: bcrypt.hashSync("123456", 10),
		isAdmin: "true",
		slug: "admin",
	},
	{
		fullName: "John Henry",
		username: "john",
		email: "john@example.com",
		biodata: "Lorem ipsum",
		country: "Peru",
		occupation: "Engineer",
		website: "https://example.com",
		password: bcrypt.hashSync("123456", 10),
		slug: "john",
	},
	{
		fullName: "Jane Henry",
		username: "jane",
		email: "jane@example.com",
		biodata: "Lorem ipsum",
		country: "China",
		occupation: "Nurse",
		website: "https://example.com",
		password: bcrypt.hashSync("123456", 10),
		slug: "jane",
	},
];

export default users;
