import React, { useEffect, useState } from 'react';
import AdminTable from '../../../Components/Admin/AdminTable';
import AddQuiz from './AddQuiz/AddQuiz';
import {IQuiz} from '../../../store/reducers/admin.reducer'
import {QuizContext} from '../../../store/context/admin.context'
import {getQuizs} from '../../../api/Quiz.api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash , faPen } from '@fortawesome/free-solid-svg-icons'
import SearchInput from '../../../Components/SearchInput/SearchInput';
import {deleteQuiz} from '../../../api/Quiz.api'
import DeleteModal from '../../../Components/Modal/DeleteModal';

const Quizs = () :JSX.Element => {

    const [isOpenModal , setOpenModal] = useState<boolean>(false);
    const [quizList , setQuizList] = useState<IQuiz[]>([])
    const [quizListData , setQuizListData] = useState<JSX.Element [] | JSX.Element>(<div> no data</div>)
    const [isOpenModalDelete , setOpenModalDelete] = useState<boolean>(false)
    const [delteFunctionModal , setDeleteFunction] = useState<any>(null)
    const headers = ["image" , "room" , "quiz name"  , "level", "action"]
    const headerStyle =  {width : 100/headers.length+"%"}
    const QUIZ_URL_PICTUR = "http://localhost:7000/app/storage/pictures/quizs/"
    const getQuizsEffect = async()=>{
        try {
            const result = await getQuizs()
            
            setQuizList(result.data)

            
        } catch (error) {
            
            console.log(error);
            
        }
    }

    const deleteQuizFunction =  (quizID : string , index : number)=>{
            
            
        return  ()=>{
            

            
          deleteQuiz(quizID).then(result=>{
             if(result) {
 
                 const newQuizs = [...quizList]
                 newQuizs.splice(index , 1)
                 setQuizList(newQuizs)
                 setOpenModalDelete(false)
             }
          }).catch(error=>{
 
             console.log(error);
             
          }) 
        }
     }

    useEffect(()=>{

        getQuizsEffect()
    } , [])

    useEffect(()=>{
        const result =quizList.map((quiz,index)=>{
            
                  return (
                  <div  className="table-row">
                   <div className='table-data'>
                          <div className='avatar-admin-container'>
                          <img className='avatar-admin' src={QUIZ_URL_PICTUR+""+quiz.avatar}  alt={quiz.title} /> 
                          </div>    
                  </div>    
                  <div style={headerStyle} className="table-data">{quiz.roomID}</div>   		
                  <div style={headerStyle} className="table-data">{quiz.title}</div>
                  <div style={headerStyle} className="table-data">{quiz.level}</div>
                  <div style={headerStyle} className="table-data">
                  <FontAwesomeIcon onClick={()=>{
                        
                        setDeleteFunction(()=>deleteQuizFunction(quiz._id , index))
                        setOpenModalDelete(true)
                    }} className='font-admin delete-font' icon={faTrash} />  
                  <FontAwesomeIcon className='font-admin update-font ' icon={faPen} />    
                  </div>
                  </div>
                  )
              })
              setQuizListData(result)      
      } , [quizList])

    return (
        <div >
            <QuizContext.Provider value={{quizList:quizList , setQuizList :setQuizList}}>
               <div className='quiz-container'>
               <SearchInput />
            <button className='add-button' onClick={()=>setOpenModal(true)}> add quiz</button>
               </div>
                <AdminTable headerStyle={headerStyle} headers={headers}   >
                    {quizListData}
                </AdminTable>
                <AddQuiz isOpenModal={isOpenModal} setOpenModal={setOpenModal} />
                <DeleteModal title={'delete quiz'}
                 deleteFunction={delteFunctionModal}
                  isOpenModal={isOpenModalDelete} 
                  setOpenModal={setOpenModalDelete } />
                </QuizContext.Provider>
        </div>
    );
};

export default Quizs;