import React, { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';


interface  Props{
    isOpenModal : boolean , 
    setOpenModal : any 
    questions : any ,
    answers : any
}
const QuizResult = ({isOpenModal , setOpenModal , answers , questions} : Props) => {


        const [score , setScore] = useState(0) 
        const numberOfQuesion = answers.length
    

    const calculateScore = ()=>{
        let count = 0;
      
        for (let index = 0; index < numberOfQuesion; index++) {
            const correctAnswer = questions[index]["correctAnswer"];
            const userAnswer = answers[index]

            if(userAnswer == correctAnswer) count++
                                                                         }
            
            setScore(count)

    }

    useEffect(()=>{
        calculateScore()
    } , [])

   
    console.log(questions);
    

    return (
            <Modal modalTitle={"quiz result"} isOpenModal={isOpenModal} setOpenModal={setOpenModal}>
                 
                   <div className='quiz-result-container'>
                   <p> you got <span> {score}</span> correct answer from <span> {numberOfQuesion}</span> </p>
                   <p>  <span> {Math.floor( score / numberOfQuesion * 100 )}%</span> </p>
                   {questions.map((question :any , index:number) =>{

                        return (
                            <div>
                                <p className='big-title' style={{color : question.correctAnswer == answers[index] ? "green" : "red" }}> {question.question} </p>
                                <ul>
                                    {question.answers.map((answer :any , index2 : number)=>{

                                        let style = null

                                        if(question.correctAnswer == index2+1) style = {background : "green"}
                                        else if(index2+1 == answers[index]) style = {background : "red"}

                                        return <li> <p style={style} className='answer-item'> {answer} </p> </li>
                                    })}
                                </ul>
                            </div>
                        )
                   })}
                   </div>

            </Modal>
    );
};

export default QuizResult;