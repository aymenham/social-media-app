import React , {useContext, useEffect, useState} from 'react';


export interface  ModalOpenProps {
      isOpenModal : boolean ,
    setOpenModal : React.Dispatch<React.SetStateAction<boolean>>
}
 interface IProps extends ModalOpenProps {
    children : React.ReactChild ,
    modalTitle : string ,
   
}
const Modal = ({children ,modalTitle , isOpenModal , setOpenModal} : IProps):JSX.Element => {
   

    const closeModal = ()=>{
     window.onclick = function(event) {  
    const modal : HTMLElement |null = document.getElementById("myModal");
  
  if (event.target == modal) {
    if(modal!=null){
        setOpenModal(false)
    }
  }
}
    }

    useEffect(()=>{
            closeModal()
    })
     
    return (
       <div style={{display : isOpenModal ? "block" :"none"}} id="myModal" className="modal">

  
  <div  className="modal-content">
    <div className="modal-header">
      <span onClick={()=>setOpenModal(false)} className="modal-close">&times;</span>
      <h2>{modalTitle}</h2>
    </div>
    <div className="modal-body">
      {children}
    </div>
 
  </div>

</div>
    );
};

export default Modal;