const User = require("../models/User.model");
const Relation = require("../models/Relation.model");
const {headers} = require("../utils/Constants")



exports.getRelation = (req, res) => {
  res.status(200).json({ message: "get relation" + req.params.id });
};

exports.createRelation = async  (req, res) => {



  const userID = req.params.id
  const user_want_tofollowID = req.headers[headers.userFollow] 
  try  {

    const userUpdated = await Relation.findOneAndUpdate(
      { USER_ID: userID },
      { $push: { subscriptions: user_want_tofollowID } }
    );
    const userFollowedUpdated = await Relation.findOneAndUpdate(
      { USER_ID: user_want_tofollowID },
      { $push: { subscribers: userID } }
    );

    res.status(200).json({message :"followed"})


  }catch(e){
      res.status(500).json({ message: e.message });
  }
};


exports.deleteRelation = async (req, res) => {
  try {
    const userID = req.params.id
    const user_want_tofollowID = req.headers[headers.userFollow]; 
    const unsubscribe = await Relation.findOneAndUpdate(
      { USER_ID: userID },
      { $pull: { subscriptions: user_want_tofollowID } }
    );

     const unsubscribeFollow = await Relation.findOneAndUpdate(
       { USER_ID: user_want_tofollowID },
       { $pull: { subscribers: userID } }
     );
     res.status(200).json({ message: "unsubscribe" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
