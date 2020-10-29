const express = require("express");
const router = express.Router();
const {
	getChallenges,
	getChallengeById,
	deleteChallenge,
	createChallenge,
	updateChallenge,
} = require("../controllers/challengeControllers");
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getChallenges).post(protect, admin, createChallenge);
router
	.route("/:id")
	.get(getChallengeById)
	.delete(protect, admin, deleteChallenge)
	.put(protect, admin, updateChallenge);

export default router;
