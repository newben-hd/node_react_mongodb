import React from 'react';
import ContestPreview from './ContestPreview';
/*
React Component
Is a function with return HTML
Make component reusable with multiple props values!
Make sure you validate props to types of the values for them with props 
validation. This is done with {ComponentName}.propTypes = {};
Also you can set default props values.
It's good practice to define a component per file.
Match name of the file with name of the component.
*/

import Header from './Header';

/**
 * Stateless component
 */
/* 
const App = () => {
  return (
    <div className='App'>
      <Header message={'message from App'} />
      <h4>Hello this is content h4</h4>
    </div>
  );
}; */

// import data from '../testData'; // this is data directly from memory
import axios from 'axios';

class App extends React.Component {
  // Instead of creating state inside constructor, create state as 
  // class property
/* 
  constructor() {
    super();
    this.state = { test: 97 };
  } */
  state = {
    test: 98,
    pageHeader: 'Naming Contests',
    // Remember only state is one that can be updated dynamically!
    // It also allows to control the list. For example in console:
    // $r.setState({contests: $r.state.contests.slice(1)}) will remove 
    // the first component
    contests: []
  }
  /**
   * This allows as to render data in any delay since it's after component
   * is mounted. For example, feting API data might take some time.    */
  componentDidMount() {
    // console.log('Component did mount!');
    // Use ajax request and fetch data from the remote API. Once we have
    // data we can make it available through the React state. For library:
    // use axios
    axios.get('/api/contests')
      .then(
      // handling the promised data. axios will give response object that
      // will have the data
        resp => {
          this.setState({
            contests: resp.data.contests
          });
        }
      )
      .catch(
      // cathing the error
        console.error
      );
  }
  
  componentWillUnmount() {
    // console.log('Component removed!');
  }

  render() {
    return (
      <div className='App'>
        <Header message={'message from App'} />
        <h4>State test value: {this.state.pageHeader}</h4>
        <div>
          {this.state.contests.map(contest=>
            <ContestPreview {...contest} key={contest.id}/>
          )}
        </div>
      </div>
    );
  }
}

import PropTypes from 'prop-types';
ContestPreview.propTypes = {
  contests: PropTypes.array
};

// Every React component has a lifecycle
// It gets mounted in the DOM
// Common ones: componentDidMount - when DOM is mounted, 
// and componentDidUnmount - when DOM is removed

/* 
App.propTypes = {
  // If you want it required use isRequired
  // headerMessage: PropTypes.string.isRequired
  headerMessage: PropTypes.string.isRequired
}; */
/* 
App.defaultProps = {
  headerMessage: 'default headerMessage'
}; */

export default App;

/**
 * API endpoint
 */