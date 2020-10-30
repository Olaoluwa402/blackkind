import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// @desc Auth user, get token
// @route POST /api/users/login
// @access Public

const authUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email });

	if (user && (await user.matchPassword(password))) {
		res.json({
			_id: user._id,
			username: user.username,
			slug: user.slug,
			fullName: user.fullName,
			email: user.email,
			biodata: user.biodata,
			website: user.website,
			country: user.country,
			occupation: user.occupation,
			pointCount: user.pointCount,
			level: user.level,
			isAdmin: user.isAdmin,
			token: generateToken(user._id),
		});
	} else {
		res.status(401);
		throw new Error("Invalid email or password");
	}
});

// @desc Register user
// @route POST /api/users
// @access Public

const registerUser = asyncHandler(async (req, res) => {
	const {
		fullName,
		username,
		biodata,
		website,
		occupation,
		email,
		country,
		password,
	} = req.body;

	const emailExits = await User.findOne({ email });
	const usernameExits = await User.findOne({ username });

	if (emailExits) {
		res.status(400);
		throw new Error("Email already exist");
	}

	if (usernameExits) {
		res.status(400);
		throw new Error("Username already exist");
	}

	const user = await User.create({
		fullName,
		username,
		biodata,
		website,
		occupation,
		email,
		country,
		password,
	});

	if (user) {
		res.status(201).json({
			_id: user._id,
			username: user.username,
			fullName: user.fullName,
			email: user.email,
			biodata: user.biodata,
			website: user.website,
			occupation: user.occupation,
			country: user.country,
			pointCount: user.pointCount,
			level: user.level,
			isAdmin: user.isAdmin,
			token: generateToken(user._id),
			slug: user.slug,
		});
	} else {
		res.status(400);
		throw new Error("Invalid user data");
	}
});

// @desc GET user profile
// @route GET /api/users/profile
// @access Private

const getUserProfile = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id);

	if (user) {
		res.json({
			_id: user._id,
			username: user.username,
			fullName: user.fullName,
			email: user.email,
			biodata: user.biodata,
			website: user.website,
			country: user.country,
			occupation: user.occupation,
			pointCount: user.pointCount,
			level: user.level,
			isAdmin: user.isAdmin,
			token: generateToken(user._id),
		});
	} else {
		res.status(404);
		throw new Error("User not found");
	}
});

const updateUserProfile = asyncHandler(async (req, res) => {
	const emailExits = await User.findOne({ email: req.body.email });

	if (emailExits) {
		res.status(400);
		throw new Error("Email already exist");
	} else {
		const user = await User.findById(req.user._id);

		if (user) {
			user.username = user.username;
			user.fullName = req.body.fullName || user.fullName;
			user.biodata = req.body.biodata || user.biodata;
			user.country = req.body.country || user.country;
			user.occupation = req.body.occupation || user.occupation;
			user.website = req.body.website || user.website;
			user.email = req.body.email || user.email;
			if (req.body.password) {
				user.password = req.body.password;
			}

			const updatedUser = await user.save();

			res.json({
				_id: updatedUser._id,
				username: updatedUser.username,
				fullName: updatedUser.fullName,
				email: updatedUser.email,
				biodata: updatedUser.biodata,
				website: updatedUser.website,
				country: updatedUser.country,
				occupation: updatedUser.occupation,
				pointCount: updatedUser.pointCount,
				level: updatedUser.level,
				isAdmin: updatedUser.isAdmin,
				token: generateToken(updatedUser._id),
			});
		} else {
			res.status(404);
			throw new Error("User not found");
		}
	}
});

// @desc Get all users
// @route GET /api/users
// @access Private/Admin

const getUsers = asyncHandler(async (req, res) => {
	const users = await User.find({});

	res.json(users);
});

// @desc Delete users
// @route DELETE /api/users/:id
// @access Private/Admin

const deleteUser = asyncHandler(async (req, res) => {
	const user = await User.findById(req.params.id);

	if (user) {
		await user.remove();
		res.json({ message: "User removed" });
	} else {
		res.status(404);
		throw new Error("User not found");
	}
});

// @desc GET user by ID
// @route GET /api/users/:id
// @access Private/Admin

const getUserById = asyncHandler(async (req, res) => {
	const user = await User.findById(req.params.id).select("-password");

	if (user) {
		res.json(user);
	} else {
		res.status(404);
		throw new Error("User not found");
	}
});

// @desc Update user
// @route PUT /api/users/:id
// @access Private/Admin

const updateUser = asyncHandler(async (req, res) => {
	const user = await User.findById(req.params.id);

	const name = req.body.name;

	if (user) {
		user.isAdmin = req.body.isAdmin || user.isAdmin;
		user.username = req.body.username || user.username;
		user.fullName = req.body.fullName || user.fullName;
		user.biodata = req.body.biodata || user.biodata;
		user.country = req.body.country || user.country;
		user.occupation = req.body.occupation || user.occupation;
		user.website = req.body.website || user.website;
		user.email = req.body.email || user.email;

		const updatedUser = await user.save();

		res.json({
			_id: updatedUser._id,
			username: updatedUser.username,
			fullName: updatedUser.fullName,
			email: updatedUser.email,
			biodata: updatedUser.biodata,
			website: updatedUser.website,
			country: updatedUser.country,
			occupation: updatedUser.occupation,
			pointCount: updatedUser.pointCount,
			level: updatedUser.level,
			isAdmin: updatedUser.isAdmin,
		});
	} else {
		res.status(404);
		throw new Error("User not found");
	}
});

export {
	authUser,
	registerUser,
	getUserProfile,
	updateUserProfile,
	getUsers,
	deleteUser,
	getUserById,
	updateUser,
};
