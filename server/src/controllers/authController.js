import User from "../../models/User.js";
import jwt from "jsonwebtoken";
import "dotenv/config"

const handleErrors = (err) => {
  // console.log(err.message, err.code);
  let errors = {
    email: '',
    password: '',
  }

  if (err.message === "incorrect email") {
    errors.email = 'that email is not registed';
    return errors;
  }

  if (err.message === "incorrect password") {
    errors.password = 'that password is incorrect';
    return errors;
  }

  if (err.code == 11000) {
    errors.email = 'that email is already registered';
    return errors;
  }

  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    })
  }
  return errors;
}

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id, username) => {
  return jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: maxAge
  })
}

const signup_get = function (req, res) {
  res.send("HELLO");
}

const signup_post = async function (req, res) {
  const { username, password } = req.body;
  console.log(username);
  try {

    const user = await User.create({ username, password });
    // console.log(user);
    const token = createToken(user._id, username);

    res.cookie("token", token, { httpOnly: true, maxAge: maxAge * 1000 });

    res.status(201).json({ user: user });

  } catch (error) {

    const errors = handleErrors(error);
    // console.log(errors);
    res.status(500).json({ errors });
  }
}

const login_post = async function (req, res) {
  const { username, password } = req.body;
  try {
    const user = await User.login(username, password);

    const token = createToken(user._id, username);

    res.cookie(
      "token",
      token,
      { httpOnly: true, maxAge: maxAge * 1000 }
    );

    res.status(200).json({ user: user._id })

  } catch (error) {
    const errors = handleErrors(error);
    res.status(500).json({ message: errors });
  }

}

export default { signup_post, signup_get, login_post }
