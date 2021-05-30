import React, { Component } from 'react';
import CardsList from './CardsList';
import SearchBox from './SearchBox';
import ErrorBoundary from './ErrorBoundary';

export class MainPage extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }
  
  render() {
    const { robots, searchField, onSearchChange, isPending } = this.props; //get props
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
  })

    return (
      <>
          { isPending ? 
              <div className='tc'>
                  <header>
                      <h1 className='f1 fw2 light-blue'>Loading...</h1>
                  </header>
              </div>
          :
              <div className='tc'>
                  <header>
                      <h1 className='f1 fw2 light-blue'>RoboFriends</h1>
                  </header>
                  <section>
                      <SearchBox searchChange={onSearchChange}/>
                      <ErrorBoundary>
                      <CardsList robots={filteredRobots} /> 
                      </ErrorBoundary>
                  </section>
              </div>
          }
      </>
    )

  }
}

export default MainPage