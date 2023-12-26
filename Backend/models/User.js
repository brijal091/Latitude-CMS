const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin:{
      type : Boolean ,
      default: false
    },
    isClient:{
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("user", UserSchema);
//   User.createIndexes();
module.exports = User;
