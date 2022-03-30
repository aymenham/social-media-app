import React, { useState } from 'react';
import AdminTable from '../../../Components/Admin/AdminTable';
import AddQuiz from './AddQuiz/AddQuiz';
import {IQuiz} from '../../../store/reducers/admin.reducer'
const Quizs = () :JSX.Element => {

    const [isOpenModal , setOpenModal] = useState<boolean>(false);
    const [quizList , setQuizList] = useState<IQuiz[]>([])
    const [quizListData , setQuizListData] = useState<JSX.Element []>([])
    const headers = ["image" , "room" , "quiz name" , "action"]
    const headerStyle =  {width : 100/headers.length+"%"}

    return (
        <div>
            <button onClick={()=>setOpenModal(true)}> add quiz</button>
                <AdminTable headerStyle={headerStyle} headers={headers}   >
                    {quizListData}
                </AdminTable>
                <AddQuiz isOpenModal={isOpenModal} setOpenModal={setOpenModal} />
        </div>
    );
};

export default Quizs;