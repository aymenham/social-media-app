const User = require("../models/User.model")
const Relation = require("../models/Relation.model")
const {headers} = require("../utils/Constants")
module.exports = {
  checkUserExist: async (req, res, next) => {
    const userInput = req.body;
    const emailInput = userInput["email"];
    const user = await User.find({ email: emailInput });

    if (user.length > 0) {
      res.status(409).json({ message: "Désolé email existe dèja" });
    } else {
      next();
    }
  },

  checkUserInRelation: async (req, res, next) => {
    const userID = req.params.id;
    try {
      const relation = await Relation.find({ USER_ID: userID });
      if (relation.length <= 0) {
        const relation = await Relation.create({
          USER_ID: userID,
          subscribers: [],
          subscriptions: [],
        });
        next();
      } else next();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  checkFollowerInRelation: async (req, res, next) => {
    const userID = req.headers[headers.userFollow];;
    try {
      const relation = await Relation.find({ USER_ID: userID });
      if (relation.length <= 0) {
        const relation = await Relation.create({
          USER_ID: userID,
          subscribers: [],
          subscriptions: [],
        });
        next();
      } else next();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};