import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
import RoboTitle from './RoboTitle';
// import Jumbotron from './Jumbotron';
// import FixedNavbar from './FixedNavbar';


class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
    // console.log("event.target.value: ", event.target.value);
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    // console.log("filteredRobots: ", filteredRobots);
    return (
      <div className='tc'> {/** tc = tachyon text-align: center;  **/}
        {/* <FixedNavbar /> */}
        <RoboTitle />
        <SearchBox searchChange={this.onSearchChange}/>
        {/* <CardList robots={this.state.robots}/> */}
        <CardList robots={filteredRobots}/>
        </div>
    )
  }
};

export default App;
