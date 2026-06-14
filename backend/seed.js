const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Subscription = require("./models/Subscription.js");
const User = require("./models/User.js");

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
  const user = await User.findOne(); // pick first user
  await Subscription.create({
    user: user._id,
    plan: "Starter",
    amount: 19,
    date: new Date()
  });
  console.log("Sample subscription added");
  mongoose.connection.close();
});
