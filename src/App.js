import React from "react";
import { connect } from "react-redux";
import { CounterActions } from "./store/Action";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  render() {
    alert();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <section>
          <button onClick={this.props.increment}>+</button>
          <button onClick={this.props.decrement}>-</button>
        </section>
      </div>
    );
  }
}
let mapStateToProps = state => {
  console.log("state: ", state);
  return {
    counter: state.counterReducer
  };
};

let mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(CounterActions.increment()),
    decrement: () => dispatch(CounterActions.decrement())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
