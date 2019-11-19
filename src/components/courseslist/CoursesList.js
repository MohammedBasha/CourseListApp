import React, {Component} from 'react';
import './CoursesList.css'

class CoursesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: []
        }
    }

    render() {
        return (
            <div>
                Courses List
            </div>
        );
    }
}

export default CoursesList;