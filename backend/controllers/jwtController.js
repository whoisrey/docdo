const admin = require("firebase-admin");
const jwt = require("jsonwebtoken");
const createError = require("http-errors");

const User = require("../models/User");

const getJWT = async (req, res) => {
  const { idToken } = req.body;

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const { uid, email, name, picture } = decodedToken;

    let user = await User.findOne({ uid });

    if (!user) {
      user = new User({ uid, email, name, picture });
      await user.save();
    }

    const token = jwt.sign({ uid: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (error) {
    next(createError(401, "토큰이 유효하지 않습니다."));
  }
};

module.exports = { getJWT };
