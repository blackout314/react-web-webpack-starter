import React, { Component } from 'react';
import {Link} from 'react-router';
import Users from '../model/Users';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {users: []};

        Users.list().then((users) => {
            this.setState({
                users
            });
        });
    }

    render() {

        const rows = this.state.users.map((user,index) => {
           return (
               <tr key={index}>
                   <td>
                       <Link to={`/detail`}><img width="50" src={user.picture.thumbnail}/></Link>
                   </td>
                   <td>{user.name.first} {user.name.last}</td>
                   <td>{user.email}</td>
               </tr>
           );
        });

        return (
            <div>
                <h2>Users list</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Mail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default List;