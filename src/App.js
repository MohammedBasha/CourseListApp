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
      ],
      current: '' // this property to control the input value after submit course name
    }
  }

  updateCourse = e => {
    let current = e.target.value;
    this.setState({current});
  }

  addCourse = e => {
    e.preventDefault();
    let inputVal = e.target.coursename.value,
        courses = this.state.courses;
    if(inputVal !== '') {
      courses.push({name: inputVal});
      this.setState({
        courses,
        current: ''
      });
    } else return false;
  }

  render() {
    const {courses} = this.state,
          coursesList = courses.map((course, index) => {
            return <CoursesList key={index} details={course} />
          });
    return (
      <div className="courseslist-wrapper">
        <h1>Courses List</h1>
        <CoursesForm
            updateCourse={this.updateCourse}
            addCourse={this.addCourse}
            currentVal={this.state.current}
        />
        <ul>
          {coursesList}
        </ul>
      </div>
    );
  }
}

export default App;
