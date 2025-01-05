import mongoose from "mongoose";
// const { isEmail } = require("validator")
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true 
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: [6, "Minimum password length is 6 caracters"],
  }
})

// userSchema.post('save', function (doc, next) {
//   console.log('new user after created & saved', doc);

//   next();
// })

userSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt)
  next();
})

userSchema.statics.login = async function (username, password) {
  const user = await this.findOne({ username });
  if (user) {
    const auth = await bcrypt.compare(password, user.password)
    if (auth) {
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect username");
}

const User = mongoose.model("user", userSchema);

export default User;
