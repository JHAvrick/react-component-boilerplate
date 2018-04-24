import React from 'react';
import {render} from 'react-dom';

/*
 * THIS COMPONENT SHOULD BE REPLACED WITH THE NAME OF YOUR COMPONENT.
 */
import ReactComponent from '../../build/react-component.js';

class App extends React.Component {
  constructor(props){
  	super(props);
    this.state = {}
  }

  render() {
    return (<div className="app">
                <ReactComponent>
                </ReactComponent>
            </div>)
  }

}

render(<App/>, document.getElementById('app'));