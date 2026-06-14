const Subscription = require("../models/Subscription.js");

const getSubscriptions = async (req, res) => {
  try {
    const subs = await Subscription.find().populate("user", "email");
    res.json(subs);
  } catch (err) {
    console.error("Billing Error:", err.message);
    res.status(500).json({ msg: "Server error" });
  }
};

module.exports = { getSubscriptions };
