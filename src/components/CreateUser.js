import React from 'react';
import axios from 'axios';

export default class CreateUser extends React.Component {

    state = {
        username: ''
    };

    onChangeUsername = e => {
        this.setState({
            username: e.target.value
        })
    };

    onSubmit = e => {
        e.preventDefault();

        const user = {
            username: this.state.username
        };

        console.log(user);

        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));

        this.setState({
            username: ''
        })
    };

    render() {
        return (
            <div>
                <h3>Add user</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input  type="text"
                                required
                                className="form-control"
                                value={this.state.username}
                                onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="ADD" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }

}
