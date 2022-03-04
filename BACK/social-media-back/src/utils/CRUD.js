const SUCESS =200
const SUCESS_CREATE = 201
const SERVER_ERROR = 500
module.exports = {
  getAllDataOfModal: async (Modal, req, res) => {
    try {
      const result = await Modal.find({});
      res.status(SUCESS).json(result);
    } catch (e) {
      res.status(SERVER_ERROR).json({ message: e.message });
    }
  },

  getModal: async (Modal, req, res) => {
    try {
      const ID = req.params.id;
      const result = await Modal.findById(ID);
      res.status(SUCESS).json(result);
    } catch (e) {
      res.status(SERVER_ERROR).json({ message: e.message });
    }
  },
  createModal: async (Modal, req, res) => {
    const modal = req.body;

    try {
      const result = await Modal.create(modal);
      res.status(SUCESS_CREATE).json( result );
    } catch (e) {
      console.log(e);
      res.status(SERVER_ERROR).json({ message: e.message });
    }
  },

  updateModal: async (Modal, req, res) => {
    const ID = req.params.id;
    const modalUpadte = req.body;
    try {
      const result = await Modal.findByIdAndUpdate(ID, modalUpadte);
      res.status(SUCESS).json(result);
    } catch (e) {
      res.status(SERVER_ERROR).json({ message: e.message });
    }
  },

  deleteModal: async (Modal, req, res) => {
   try {
     const ID = req.params.id;
     const result = await Modal.findByIdAndDelete(ID);
     res.status(SUCESS).json(result);
   } catch (e) {
     res.status(SERVER_ERROR).json({ message: e.message });
   }
  },
};