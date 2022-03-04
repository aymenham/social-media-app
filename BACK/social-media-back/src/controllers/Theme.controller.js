const Theme = require("../models/Theme.model")
const {getAllDataOfModal , getModal , createModal , updateModal ,deleteModal} = require("../utils/CRUD")
exports.getAllTheme =  (req, res) => {

    getAllDataOfModal(Theme , req , res)

};

exports.getTheme =  (req, res) => {

  getModal(Theme , req , res)
 
};

exports.createTheme =  (req, res) => {

  createModal(Theme , req , res)
 
};

exports.updateTheme =  (req, res) => {

  updateModal(Theme ,req , res)

};

exports.deleteTheme =  (req, res) => {

    deleteModal(Theme , req , res)

};
