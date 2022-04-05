import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getQuizsByRoom } from '../../../api/Quiz.api';
import QuizCard from '../../../Components/QuizCard/QuizCard';

interface QuizProps {
    _id:string
    title :string ,
    avatar : string
}

const QuizsPage = () => {

    const [quizs , setQuizs] = useState<QuizProps[]>([])
    const params = useParams()

    const getQuizsEffect = async ()=>{
        console.log("id" , params["id"]);
        
        try {
            const result = await getQuizsByRoom(params["id"])        
            setQuizs(result.data)
            
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        getQuizsEffect()
    } , [])
    console.log(quizs);
    
    return (
        
        <div>
          { quizs.length >0  ? quizs.map(quiz=>{

                return <QuizCard url={quiz._id} title={quiz.title} avatar={quiz.avatar} />
                }) : null}
        </div>
    );
};

export default QuizsPage;