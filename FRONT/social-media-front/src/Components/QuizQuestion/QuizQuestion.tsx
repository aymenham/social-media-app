import React, { useState } from 'react';


interface Props {
    
    question :any,
    setAnswerChosed : any ,
    answerChosed : number ,
    cuurent : number
}

const QuizQuestion = ({question , setAnswerChosed , answerChosed , cuurent} : Props) => {
  
    
  
    
    return (
        <div className='quiz-question-container'>
           <h2 className='big-title'> Question {cuurent} : {question["question"]} </h2>
           {question["answers"].map((answer:any , index:number)=>{
                let style = {}
                if(answerChosed == index+1) {
                     style = {backgroundColor :"#FA3C66"}
                }   
               return <p className='answer-item' style={style} onClick={()=>setAnswerChosed(index+1)}> {answer}</p>
           })}
         
        </div>
    );
};

export default QuizQuestion;