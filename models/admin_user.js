const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/examsystem", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
var conn = mongoose.Collection;
var adminUserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    index: {
      unique: true,
    },
  },
  email: {
    type: String,
    required: true,
    index: {
      unique: true,
    },
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
var adminUserModel = mongoose.model("admin_user", adminUserSchema);
module.exports = adminUserModel;
