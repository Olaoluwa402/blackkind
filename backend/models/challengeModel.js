import mongoose from "mongoose";
import slug from "mongoose-slug-updater";
mongoose.plugin(slug);

const challengeSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "User",
	},
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	isComplete: {
		type: Boolean,
		default: false,
	},
	status: {
		type: String,
		default: null,
	},
});

const Challenge = mongoose.model("Challenge", challengeSchema);

export default Challenge;
