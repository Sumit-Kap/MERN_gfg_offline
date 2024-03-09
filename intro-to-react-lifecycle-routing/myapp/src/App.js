import './App.css';

import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      counter: 0,
      loader: true,
      response:{}
    }
    this.getData = this.getData.bind(this);
    console.log("In constructor method");
  }

  static getDerivedStateFromProps(nextProps,nextState) {
    console.log("In get derived state from props", nextProps, nextState);
  }
  UNSAFE_componentWillMount() {
    console.log("in component will mount")
  }

  UNSAFE_componentWillUpdate(newProps, newState) {
    console.log("In component will update",newProps, newState)
  }

  getSnapshotBeforeUpdate(previousState, newState) {
    console.log("In getSnapshotBeforeUpdate", previousState, newState)
  }

  componentDidUpdate(props, state) {
    console.log("In componentDidUpdate", props, state)

  }

  shouldComponentUpdate(props, state) {
    console.log("In shouldComponentUpdate", props, state);
    return true;
  }
  componentWillUnmount() {
    console.log("In component will unmount")
  }
 getData() {
    fetch("https://jsonplaceholder.typicode.com/photos").then((response) => {
      return response.json();
    }).then((results) => {
      console.log(results);
      this.setState({
        loader: false,
        response: results
      })
    }).catch((err) => {
      console.log(err);
      this.setState({
        loader: false
      })
    })
  }
  componentDidMount() {
   this.getData();
  }
  render() {
    console.log("In render method", this.props);
    if (this.state.loader) {
      return (<div className='loader'>Loading.....</div>)
    }
    return (
      <div className="App">
        <button onClick={() => {
          this.props.history.push("/about-us")
        }}>Click me</button>
        {this.state.response && this.state.response.map((res) => {
          return (
            <>
              <img src={res.url} width="200" height="200" alt='image not found'/>
            </>
         )
       })}
      </div>
    );
  }
}

export default App; // Higher order component connect is HOC v5 router
// connect 
// HOC -> HOF (Higher order functions) -> HOC -> function(Component)-> Component withAuth(),withTheme()