import React, { Component } from 'react';

import ProjectItem from '../project/ProjectItem';
import Header from '../../common/components/layout/header/Header';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header/>
        <h1>Welcome to the Dashboard!</h1>
        <ProjectItem />
      </div>
    )
  }
}

export default Dashboard;