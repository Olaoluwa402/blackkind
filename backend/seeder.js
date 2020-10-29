const mongoose = require("mongoose");
const dotenv = require("dotenv");
const colors = require("colors");
const users = require("./data/users");
const challenges = require("./data/challenges");
const User = require("./models/userModel");
const Challenge = require("./models/challengeModel");
const connectDB = require("./config/db");

dotenv.config();

connectDB();

const importData = async () => {
	try {
		await Challenge.deleteMany();
		await User.deleteMany();

		const createdUsers = await User.insertMany(users);
		const adminUser = createdUsers[0]._id;

		const sampleChallenges = challenges.map((challenge) => {
			return { ...challenge, user: adminUser };
		});

		await Challenge.insertMany(sampleChallenges);
		console.log("Data Imported!".green.inverse);
		process.exit();
	} catch (error) {
		console.log(`${error}`.red.inverse);
		process.exit(1);
	}
};

const destroyData = async () => {
	try {
		await Challenge.deleteMany();
		await User.deleteMany();

		console.log("Data Destroyed!".red.inverse);
		process.exit();
	} catch (error) {
		console.log(`${error}`.red.inverse);
		process.exit(1);
	}
};

if (process.argv[2] === "-d") {
	destroyData();
} else {
	importData();
}
