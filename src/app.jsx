import React from 'react';
import '../styles/index.scss';
import './my-trello';

export default class App extends React.Component {
  render() {
  	console.log(T);
    return (
      <div>
        <h1>What's on your plate?</h1>
        <form>
        	<input type="text" name="todo" placeholder="Enter your todo"></input>
			<button type="button">Go</button>
        	</form>
      </div>
    )
  }
}
