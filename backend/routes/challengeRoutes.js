import express from "express";
const router = express.Router();
import {
	getChallenges,
	getChallengeById,
	deleteChallenge,
	createChallenge,
	updateChallenge,
} from "../controllers/challengeControllers.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getChallenges).post(protect, admin, createChallenge);
router
	.route("/:id")
	.get(getChallengeById)
	.delete(protect, admin, deleteChallenge)
	.put(protect, admin, updateChallenge);

export default router;
