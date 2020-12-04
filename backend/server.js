import express from "express";
const app = express();
import path from "path";
import dotenv from "dotenv"; 
import colors from "colors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

import connectDB from "./config/db.js";

// route connection
import userRoutes from "./routes/userRoutes.js";
import challengeRoutes from "./routes/challengeRoutes.js";

// cofig connection
dotenv.config(); 
connectDB();

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/challenges", challengeRoutes);

const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/build")));

	app.get("*", (req, res) =>
		res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
	);
} else {
	app.get("/", (req, res) => {
		res.send("api is running..");
	});
}
// middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
	PORT,
	console.log(
		`Server running on ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
			.underline
	)
);
