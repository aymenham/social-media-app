import React, { useEffect, useReducer, useState } from 'react';
import Modal from '../../../../Components/Modal/Modal';
import {ModalOpenProps} from '../../../../Components/Modal/Modal'
import MainScreen from './MainScreen';
import QuestionsScreen from './QuestionScreen';
import {AddQuizContext} from '../../../../store/context/admin.context'
import {addQuizReducer} from '../../../../store/reducers/admin.reducer'
const AddQuiz = ({isOpenModal , setOpenModal} : ModalOpenProps) :JSX.Element => {

    const [indexScreen , setIndexScreen] = useState<number>(0)    
    const screens :JSX.Element[] = [<MainScreen /> , <QuestionsScreen />]
    const [QuizStat , AddQuizDispatch] = useReducer(addQuizReducer , {
    title :"" , 
    avatar :  null ,
    level :"" ,
    questions : [],
    players :  [] ,
    number_question :1
    })

  
    
    return (
    <AddQuizContext.Provider 
    value={{stateAddQuestion : QuizStat , dispatchAddQuestion : AddQuizDispatch}}
     >
        <Modal modalTitle='add quiz' isOpenModal={isOpenModal} setOpenModal={setOpenModal} >
                
                <div className='main-add-quiz'>
                    {screens[indexScreen]}
                          <div className='action-quiz-button'>
                <button onClick={()=>setIndexScreen(indexScreen -1)} style={{display:indexScreen>0 ? "block" : "none"} } className='submit-button '>back</button>
               
                  <button onClick={()=>setIndexScreen(indexScreen +1)} style={{display:indexScreen>=screens.length-1 ? "none" : "block"} } className='submit-button'>next</button>
                </div>
                </div>
        </Modal>
        </AddQuizContext.Provider>
    );
};

export default AddQuiz;