const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
const colors = require("colors");
const { notFound, errorHandler } = require("./middleware/errormiddleware");

const connectDB = require("./config/db");

// route connection
const userRoutes = require("./routes/userRoutes");
const challengeRoutes = require("./routes/challengeRoutes");

// cofig connection
dotenv.config();
connectDB();

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/challenges", challengeRoutes);

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
