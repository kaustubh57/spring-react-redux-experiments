import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProject } from './projectActions';
import { selectErrors } from '../errors/errorSelectors';


const mapState = (state) => {
  const errors = selectErrors(state);

  return {errors};
};

const actions = {
  handleCreateProject: createProject
};


class AddProject extends Component {

  constructor(props) {
    super(props);

    this.state = {
      "projectName": "",
      "projectIdentifier": "",
      "description": "",
      "start_date": "",
      "end_date": "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  onSubmit(event) {
    event.preventDefault();
    const newProject = {
      "projectName": this.state.projectName,
      "projectIdentifier": this.state.projectIdentifier,
      "description": this.state.description,
      "start_date": this.state.start_date,
      "end_date": this.state.end_date
    };

    console.log(newProject);
    this.props.handleCreateProject(newProject, this.props.history);
  }

  render() {
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-4 text-center">Create Project form</h5>
              <hr/>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="projectName"
                    value={this.state.projectName}
                    onChange={this.onChange}
                    className="form-control form-control-lg "
                    placeholder="Project Name"/>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="projectIdentifier"
                    value={this.state.projectIdentifier}
                    onChange={this.onChange}
                    className="form-control form-control-lg"
                    placeholder="Unique Project ID"/>
                </div>

                <div className="form-group">
                  <textarea
                    name="description"
                    value={this.state.description}
                    onChange={this.onChange}
                    className="form-control form-control-lg"
                    placeholder="Project Description"/>
                </div>
                <h6>Start Date</h6>
                <div className="form-group">
                  <input
                    type="date"
                    name="start_date"
                    value={this.state.start_date}
                    onChange={this.onChange}
                    className="form-control form-control-lg"/>
                </div>
                <h6>Estimated End Date</h6>
                <div className="form-group">
                  <input
                    type="date"
                    name="end_date"
                    value={this.state.end_date}
                    onChange={this.onChange}
                    className="form-control form-control-lg"/>
                </div>

                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4"/>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

AddProject.propTypes = {
  handleCreateProject: PropTypes.func.isRequired
};

export default connect(mapState, actions)(AddProject);