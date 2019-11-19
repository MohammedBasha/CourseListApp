import React, {Component} from 'react';
import CoursesForm from './components/coursesform/CoursesForm';
import CoursesList from './components/courseslist/CoursesList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [
        {name: 'HTML'},
        {name: 'CSS'},
        {name: 'jQuery'}
      ]
    }
  }

  render() {
    const {courses} = this.state,
          coursesList = courses.map(course => {
            return <CoursesList details={course} />
          });
    return (
      <div className="courseslist-wrapper">
        <h1>Courses List</h1>
        <CoursesForm />
        <ul>
          {coursesList}
        </ul>
      </div>
    );
  }
}

export default App;
