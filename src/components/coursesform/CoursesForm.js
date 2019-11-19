import React from 'react';
import './CoursesForm.css'

const CoursesForm = () => {
    return(
        <form>
            <input type="text" name="coursename" id="coursename" placeholder="Add a Course" />
            <input type="submit" value="Add Course" />
        </form>
    );
}

export default CoursesForm;