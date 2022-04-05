import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
interface QuizProps {
    url : string
    title :string
    avatar : string
}
const QuizCard = ({title , url , avatar}:QuizProps) => {

    const path = useLocation()
    const navigate = useNavigate()
    const ROOMS_URL_PICTUR ="http://localhost:7000/app/storage/pictures/quizs/"
    return (
        <div className="courses-container">
        <div className="course">
            <div className="course-preview">
                
                <img src={`${ROOMS_URL_PICTUR}${avatar}`} alt=""  />
              
            </div>
            <div className="course-info">
                <div className="progress-container">
                    <div className="progress"></div>
                    <span className="progress-text">
                      60%
                    </span>
                </div>
                <h6>HARD</h6>
                <h2>{title}</h2>
                <button onClick={(()=>navigate(path.pathname+"/"+url))} className="btn-play-quiz">Play Quiz</button>
            </div>
        </div>
    </div>
    );
};

export default QuizCard;