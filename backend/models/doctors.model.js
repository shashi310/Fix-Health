const mongoose = require("mongoose");

const doctorsSchema = mongoose.Schema(
  {
    name:String,
    expertise: String,
    city:String ,
    avatarUrl:String
  
  },
  { versionKey: false }
);

const doctorsModel = mongoose.model("doctors", doctorsSchema);

module.exports = {
  doctorsModel,
};