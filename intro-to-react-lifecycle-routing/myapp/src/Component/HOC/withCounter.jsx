import React from "react";

const withCounter = (Component) => {
    return class Increment extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                counter: 0
            };
            // this.handleClick = this.handleClick.bind(this);
        }
        handleClick() {
            const { counter } = this.state;
            this.setState({ counter: counter + 1 });
        }
    render() {
      return (
        <>
          <Component handleClick={this.handleClick.bind(this)} value={this.state.counter} />
        </>
      );
    }
  };
};

export default withCounter;

/*
Create a custom array with the following methods like push, pop, reduce, filter using the protypical inheritance

const arr = new CustomArray() 
this.__proto__

const arr1 = []

Context - <Context
A->B->C->D->E->F->G->H->I
prop drilling - context -> provider, consumer
redux - publisher, subscriber -> Flux based architecture.

*/

// L63/L64
// function CustomArray() {
//     const obj = {};
//     this.__proto__push = () => {
        
//     }
// }
// const arr = new CustomArray();
// arr.push()
// arr.pop


// CustomEventEmmitter

// csm.emit('greet', function A() {
    
// })
// csm.emit('greet', function B() {
    
// })
// csm.on('greet',)
// csm.off('greet', A);
// JSON.stringify() // 