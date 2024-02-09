const express = require('express');
require("dotenv").config();
const { connection } = require("./config/db");
const cors = require("cors");
const { doctorsRouter } = require('./rotes/doctors.route');




const app = express();
const port = process.env.PORT || 8080
app.use(express.json());
app.use(cors());


app.use("/doctors", doctorsRouter);

app.get('/', (req, res) => {
	res.status(200).send("Welcome to the backend of Fix-Health")
});



app.listen(port, async () => {
	try {
		await connection();
		console.log(`Listening at port - ${port}`);
	} catch (error) {
		console.error(error.message);
	}
});