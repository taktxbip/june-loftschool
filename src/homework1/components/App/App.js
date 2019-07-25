import React, { Component, PureComponent } from 'react';

class App extends Component {
  state = {
    counter: 30
  };
  handleClick = event => {
    this.setState(state => ({ counter: state.counter + 1 }));
  };
  render() {
    return (
      <div>
        <p>
          counter {this.state.counter}
          <button onClick={this.handleClick}>+</button>
        </p>
        <Child
          var={this.state.counter}
          condition={this.state.counter % 2 === 0}
        >
          <p>Some text</p>
        </Child>
      </div>
    );
  }
}

class Child extends PureComponent {
  render() {
    console.log(this.props);
    return (
      <div>
        <pre>Child:</pre>
        {this.props.condition && this.props.children}
      </div>
    );
  }
}

export default App;