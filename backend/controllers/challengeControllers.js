const asyncHandler = require("express-async-handler");
const Challenge = require("../models/challengeModel");

// @desc Fetch all challenges
// @route GET /api/challenges
// @access Public

const getChallenges = asyncHandler(async (req, res) => {
	const challenges = await Challenge.find({});
	res.json(challenges);
});

// @desc Fetch single challenge
// @route GET /api/challenges/:id
// @access Public
const getChallengeById = asyncHandler(async (req, res) => {
	const challenge = await Challenge.findById(req.params.id);

	if (challenge) {
		res.json(challenge);
	} else {
		// not found status
		res.status(404);
		throw new Error("Challenge not found");
	}
});

// @desc Delete challenge
// @route DELETE /api/challenges/:id
// @access Private/Admin
const deleteChallenge = asyncHandler(async (req, res) => {
	const challenge = await Challenge.findById(req.params.id);

	if (challenge) {
		await challenge.remove();
		res.json({ message: "Challenge removed" });
	} else {
		// not found status
		res.status(404);
		throw new Error("Challenge not found");
	}
});

// @desc Create a challenge
// @route POST /api/challenges
// @access Private/Admin
const createChallenge = asyncHandler(async (req, res) => {
	const challenge = new Challenge({
		name: "challenge name",
		description: "challenge description",
		status: "",
		user: req.user._id,
	});

	const createdChallenge = await challenge.save();
	res.status(201).json(createdChallenge);
});

// @desc Update a challenge
// @route PUT /api/challenges/:id
// @access Private/Admin
const updateChallenge = asyncHandler(async (req, res) => {
	const { name, description } = req.body;
	const challenge = await Challenge.findById(req.params.id);

	if (challenge) {
		challenge.name = name;
		challenge.description = description;

		const updatedChallenge = await challenge.save();
		res.status(201).json(updatedChallenge);
	} else {
		res.status(404);
		throw new Error("Challenge not found");
	}
});

export {
	getChallenges,
	getChallengeById,
	deleteChallenge,
	createChallenge,
	updateChallenge,
};
