import Router from "express"
import authController from "../controllers/authController.js"
// const { signup_get, signup_post, login_get, logout_get, login_post } = require("../controllers/authController")
// const { checkUser } = require("../middlewares/authMiddleware")
const router = Router();

// router.get("*", checkUser);
// router.get('/', (req, res) => {
//     return res.render('home')
// });



router.get("/signup", authController.signup_get);
// router.get("/login", login_get);
// router.get("/logout", logout_get);

router.post("/signup", authController.signup_post);
// router.post("/login", login_post);


export default router;
