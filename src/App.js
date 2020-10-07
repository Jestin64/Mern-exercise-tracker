import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import CreateExercise from "./components/CreateExercise"
import CreateUser from "./components/CreateUser"
import EditExercise from "./components/EditExercise"
import ExerciseList from "./components/ExerciseList"



function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Route path="/" exact component={ExerciseList}/>
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/createExercise"  component={CreateExercise} />
        <Route path="/createUser"  component={CreateUser} />
      </div> 
    </Router> 
  );
}

export default App;
