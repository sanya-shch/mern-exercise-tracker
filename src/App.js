import React from 'react';

import { BrowserRouter, Route} from "react-router-dom";

import CreateExercise from './components/CreateExercise';
import CreateUser from './components/CreateUser';
import EditExercise from './components/EditExercise';
import ExercisesList from './components/ExercisesList';
import Navbar from './components/Navbar';

function App() {

    return (
        <BrowserRouter>
            <div className="container">
                <Navbar />
                <br/>
                <Route path="/" exact component={ExercisesList} />
                <Route path="/edit/:id" component={EditExercise} />
                <Route path="/create" component={CreateExercise} />
                <Route path="/user" component={CreateUser} />
            </div>
        </BrowserRouter>
    );

}

export default App;
