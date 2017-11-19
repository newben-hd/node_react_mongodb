import React from 'react';
import ReactDOM from 'react-dom';

// First api call from react-dom is render something

/*
@arg first: what to render
@arg second: where we want to render
*/

ReactDOM.render(
  /*
	@arg first: html tag type
	@arg second: attributes
	@arg third: any childrens
	*/
  React.createElement('h2', null, 'Hello React!'),
  document.getElementById('root')
);

// React.createElement creates an object with properties:
// type of the object as html tag 
// props which has children property - in this case "Hello React!" text


/*
Before writing React API for creating HTML tree node, JSX allows us to
write actual HTML syntax.
This works because we configured Babel to actually compile this code into
React.
Also with JSX, we get to use JavaScript variables
JSX is similar to HTML with some exceptions:
    class -> className
*/

// const color = Math.random() > 0.5 ? 'green' : 'red';
// console.log(color);

import App from './components/App';
// import data from './testData';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

/**
 * Component composability
 */
/* 
setTimeout(()=>{
  ReactDOM.render(
    <div>Removed component for testing componentWillUnmount</div>,
    document.getElementById('root')
  );
},3000); */

// console.log(data);