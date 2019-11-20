import React, {Component} from 'react';
import './CoursesList.css'

class CoursesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false
        }
    }

    toggleEdit = _ => {
        this.setState({isEdit: !this.state.isEdit});
    }

    editCourse = e => {
        e.preventDefault();
        this.props.editCourse(this.props.index, this.input.value);
        this.toggleEdit();
    }

    handleCourses = _ => {
        return (
            <form onSubmit={e => e.preventDefault()}>
                <span>{this.props.details.name}</span>
                <button onClick={this.toggleEdit}>Edit</button>
                <button onClick={_ => this.props.deleteCourse(this.props.index)}>
                    Delete
                </button>
            </form>
        );
    }

    handleEdit = _ => {
        return (
            <form onSubmit={e => e.preventDefault()}>
                <input type="text"
                defaultValue={this.props.details.name}
                ref={v => this.input = v}
                //placeholder={`Update Course ${this.props.details.name}`}
                />
                <button onClick={this.editCourse}>Update</button>
            </form>
        );
    }

    render() {
        return (
            <li>
                {!this.state.isEdit ? this.handleCourses() : this.handleEdit()}
            </li>
        );
    }
}

export default CoursesList;