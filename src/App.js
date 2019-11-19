import React, {Component} from 'react';
import CoursesForm from './components/coursesform/CoursesForm';
import CoursesList from './components/courseslist/CoursesList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: []
    }
  }

  render() {
    return (
      <div className="courseslist-wrapper">
        <h1>Courses List</h1>
        <CoursesForm />
        <CoursesList />
      </div>
    );
  }
}

export default App;
