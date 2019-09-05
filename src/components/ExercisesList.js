import React from 'react';
import axios from 'axios';

import ExerciseItem from './ExerciseItem';

export default class ExercisesList extends React.Component {

    state = {exercises: []};

    componentDidMount = () => {
        axios.get('http://localhost:5000/exercises/')
            .then(response => {
                this.setState({ exercises: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    };

    deleteExercise = id => {
        axios.delete('http://localhost:5000/exercises/'+id)
            .then(response => { console.log(response.data)});

        this.setState({
            exercises: this.state.exercises.filter(el => el._id !== id)
        })
    };

    exerciseList() {
        return this.state.exercises.map(currentexercise => {
            return <ExerciseItem exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
        })
    }

    render() {
        return (
            <div>
                <h3>Exercises list</h3>
                <table className="table">
                    <thead className="thead-light">
                    <tr>
                        <th>Username</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.exerciseList() }
                    </tbody>
                </table>
            </div>
        )
    }

}
