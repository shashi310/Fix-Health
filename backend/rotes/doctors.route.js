const express = require("express");
const { doctorsModel } = require("../models/doctors.model");


const doctorsRouter = express.Router();


doctorsRouter.get("/", async (req, res) => {


    try {
      const doctors = await doctorsModel.find();
      res.status(200).send({ msg: "All doctors", doctors: doctors });
    } catch (err) {
      res.status(400).send(err);
    }
  });


  module.exports = {
    doctorsRouter,
  };