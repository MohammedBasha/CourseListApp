import React from 'react';
import './CoursesForm.css'

const CoursesForm = props => {
    return(
        <form onSubmit={props.addCourse}>
            <input type="text"
                    name="coursename"
                    id="coursename"
                    placeholder="Add a Course"
                    onChange={props.updateCourse}
                    value={props.currentVal}
            />
            <input type="submit" value="Add Course" />
        </form>
    );
}

export default CoursesForm;