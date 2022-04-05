import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getQuiz } from '../../../api/Quiz.api';
import QuizQuestion from '../../../Components/QuizQuestion/QuizQuestion';
import QuizResult from '../../../Components/QuizQuestion/QuizResult';

const QuizGame = () => {

    const params = useParams()
    const quizID = params["quizID"]
    const [currentQuestion , setCurrentQuestion] = useState<number>(-1)
    const [answerChosed , setAnswerChosed] = useState<number>(-1)
    const [allAnswerChosed , setAllAnswerChosed] = useState<number []>([])
    const [quizQuestions , setQuizQuestions] = useState(null)
    const [isOpenModal , setOpenModal] = useState(false)
    const getQuizEffect = async  ()=>{

        try {
            const result = await getQuiz(quizID)
            const questions = result.data["questions"]
            setCurrentQuestion(0)
            setQuizQuestions(questions)
            
            
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        
        
        getQuizEffect()
    } , [])


    return (
        <div className='quiz-game'>
            
            {quizQuestions!= null ? 
               <div className='quiz-game-info'>
                <QuizQuestion cuurent={currentQuestion +1} answerChosed={answerChosed} setAnswerChosed= {setAnswerChosed} question={quizQuestions[currentQuestion]} /> 
                  <button onClick={()=>{

                      setCurrentQuestion(currentQuestion +1)
                      setAnswerChosed(-1)
                      setAllAnswerChosed([...allAnswerChosed , answerChosed])
                  }} style={{display : (quizQuestions.length > currentQuestion+1 && answerChosed >0  )? "block":"none"}}> next </button>
                  <button onClick={()=>{

                    setAllAnswerChosed([...allAnswerChosed , answerChosed])
                    setOpenModal(true)
                  

                  }} style={{display : quizQuestions.length == currentQuestion+1 && answerChosed >0  ? "block":"none"}}> Show Result </button>
                  </div>
            
            : 
            
            null }
            :
           {isOpenModal &&  <QuizResult isOpenModal={isOpenModal} 
                        setOpenModal={setOpenModal} 
                        questions ={quizQuestions} 
                        answers = {allAnswerChosed}
                        />}
      
        </div>
    );
};

export default QuizGame;