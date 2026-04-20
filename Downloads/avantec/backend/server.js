const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");

const app = express();
app.use(express.json());
app.use(cors());

// ✅ CONNECT DATABASE
mongoose.connect("mongodb://127.0.0.1:27017/avantech")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// ✅ USER MODEL
const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);


// ✅ SIGNUP API
app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.json({ success: true, message: "User created" });

  } catch (error) {
    res.json({ success: false, message: "Error" });
  }
});


// ✅ LOGIN API
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ success: false });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      res.json({ success: true, username: user.username });
    } else {
      res.json({ success: false });
    }

  } catch (error) {
    res.json({ success: false });
  }
});


// ✅ START SERVER
app.listen(5000, () => {
  console.log("Server running on port 5000");
});