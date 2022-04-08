const XO = require("../models/XO.model")
const {getAllDataOfModal , getModal , createModal , updateModal ,deleteModal} = require("../utils/CRUD")
exports.getAllXO =  (req, res) => {

    getAllDataOfModal(XO , req , res)

};

exports.getXO =  (req, res) => {

  getModal(XO , req , res)
 
};

exports.createXO =  async (req, res) => {

    createModal(XO, req, res);
 
};

exports.updateXO =  (req, res) => {

  updateModal(XO ,req , res)

};

exports.deleteXO =  (req, res) => {

    deleteModal(XO , req , res)

};