import React, { ReducerWithoutAction, useReducer } from 'react';
import './sass/App.scss';
import {
  BrowserRouter as Router,
  Route,
  Routes 
} from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import Admin from './pages/Admin/Admin';
import Navbar from './pages/HomePage/Navbar';
import Rooms from './pages/Admin/Rooms/Rooms';
import Users from './pages/Admin/Users/Users';
import Quizs from './pages/Admin/Quizs/Quizs';
import RoomsPage from './pages/Rooms/RoomsPage';
import UserPage from './pages/User/UserPage';
import ChatBody from './pages/User/Chat/chatBody/ChatBody';
import Posts from './pages/User/Posts/Posts';
import AddPost from './pages/User/Posts/AddPost';
import DetailPost from './pages/User/Posts/DetailPost';
import QuizsPage from './pages/User/Quiz/QuizsPage';
import QuizGame from './pages/User/Quiz/QuizGame';
function App() {


  
  const Test1 = ()=>{
    return (<div> hello world</div>)
  }
 

  return (
      <Router>
        <Navbar />
      <Routes>
      <Route  path="/" element={<HomePage />} />
      <Route  path="/rooms" element={<RoomsPage />} />
      <Route path='/admin' element={<Admin/>} > 
        <Route  path="rooms" element={<Rooms />} />
        <Route  path="users" element={<Users />} />
        <Route  path="posts" element={<Test1 />} />
        <Route  path="quizs" element={<Quizs />} />
      </Route>

      <Route  path="rooms/:id" element={<UserPage />}> 
      <Route  path="chat" element={<ChatBody />} />
      <Route  path="add_post" element={<AddPost />} />
      <Route  path="posts/:postID" element={<DetailPost />} />
      <Route  path="posts" element={<Posts />} />
      
      <Route  path="quizs" element={<QuizsPage />} />
      <Route  path="quizs/:quizID" element={<QuizGame />} />
      <Route  path="game" element={<Test1 />} />
      <Route  path="profil" element={<Test1 />} />
      </Route>


      </Routes>
     </Router>
    
  );
}

export default App;
