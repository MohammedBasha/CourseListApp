import React, {Component} from 'react';
import './CoursesList.css'

class CoursesList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>
                {this.props.details.name}
            </li>
        );
    }
}

export default CoursesList;