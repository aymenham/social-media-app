import React from 'react';
import Modal, { ModalOpenProps } from '../../Components/Modal/Modal';


interface DeleteModal extends ModalOpenProps {
    
    title : string ,
    deleteFunction : any
}
const DeleteModal = ({isOpenModal , setOpenModal , title  , deleteFunction }:DeleteModal) => {
    
    console.log("delete funcrion",deleteFunction);
    
    
    return (
        <Modal  isOpenModal={isOpenModal} setOpenModal={setOpenModal} modalTitle={title}   >

            <div>
                <p> confirm you're delete </p>
                <button onClick={()=>{
                  deleteFunction()
                }}>yes</button>
                <button onClick={()=>setOpenModal(false)}>no</button>
            </div>
        </Modal>
    );
};

export default DeleteModal;