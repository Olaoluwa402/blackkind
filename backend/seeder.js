import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import challenges from "./data/challenges.js";
import User from "./models/userModel.js";
import Challenge from "./models/challengeModel.js";
import connectDB from "./config/db.s";

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
