import React, { ReducerWithoutAction, useReducer } from 'react';
import './sass/App.scss';
import {
  BrowserRouter as Router,
  Route,
  Link ,
  Routes
} from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import Admin from './pages/Admin/Admin';
import Navbar from './pages/HomePage/Navbar';
import Rooms from './pages/Admin/Rooms/Rooms';
import Users from './pages/Admin/Users/Users';
import Quizs from './pages/Admin/Quizs/Quizs';
function App() {

  type State = {
    count :number
  }

  type Action = {type :"increment"}
  const Test = ():JSX.Element=>{
    return (
      	<div className="table">
		<div className="table-header">
			<div className="header__item">Example</div>
			<div className="header__item"><a id="wins" className="filter__link filter__link--number" href="#">Wins</a></div>
			<div className="header__item"><a id="draws" className="filter__link filter__link--number" href="#">Draws</a></div>
			<div className="header__item"><a id="losses" className="filter__link filter__link--number" href="#">Losses</a></div>
			<div className="header__item"><a id="total" className="filter__link filter__link--number" href="#">Total</a></div>
		</div>
		<div className="table-content">	
			<div className="table-row">		
				<div className="table-data">Tom</div>
				<div className="table-data">2</div>
				<div className="table-data">0</div>
				<div className="table-data">1</div>
				<div className="table-data">5</div>
			</div>

      		<div className="table-row">		
				<div className="table-data">Tom</div>
				<div className="table-data">2</div>
				<div className="table-data">0</div>
				<div className="table-data">1</div>
				<div className="table-data">5</div>
			</div>
		
		
		</div>	
	</div>

    )
  }

  function reducerTest(state:State , action:Action) : State{
     return {
       count : state.count+1
     }
  }
    const Test1 = ():JSX.Element=>{
      
      const [ state , dispatch] =useReducer(reducerTest , {count :0})
      return (
    
    <div>
            {state.count}
            <button onClick={()=>dispatch({type :"increment"})}>increment </button>
    </div>)
  }



  return (
      <Router>
        <Navbar />
      <Routes>
      <Route  path="/" element={<HomePage />} />
      <Route path='/admin' element={<Admin/>} > 
        <Route  path="rooms" element={<Rooms />} />
        <Route  path="users" element={<Users />} />
        <Route  path="posts" element={<Test1 />} />
        <Route  path="quizs" element={<Quizs />} />
        <Route  path="statics" element={<Test />} />
      </Route>

      </Routes>
     </Router>
    
  );
}

export default App;
