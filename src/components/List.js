import React, { Component } from 'react';
import {Link} from 'react-router';

class List extends Component {
    render() {
        return (
            <div>
                <h2>List</h2>
                <Link to={`/detail`}>Detail</Link>
            </div>
        );
    }
}

export default List;