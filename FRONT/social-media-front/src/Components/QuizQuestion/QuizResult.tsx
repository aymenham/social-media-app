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
                 
                   <div>
                   <div> you got {score} correct answer from {numberOfQuesion} </div>
                   <div>  {Math.floor( score / numberOfQuesion * 100 )} </div>
                   {questions.map((question :any , index:number) =>{

                        return (
                            <div>
                                <div style={{color : question.correctAnswer == answers[index] ? "green" : "red" }}> {question.question} </div>
                                <ul>
                                    {question.answers.map((answer :any)=>{

                                        return <li> {answer} </li>
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