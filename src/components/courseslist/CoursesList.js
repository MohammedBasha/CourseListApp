import React, {Component} from 'react';
import './CoursesList.css'

class CoursesList extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <li>
                <span>{this.props.details.name}</span>
                <button onClick={_ => this.props.deleteCourse(this.props.index)}>Delete</button>
            </li>
        );
    }
}

export default CoursesList;