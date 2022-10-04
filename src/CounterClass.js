import React from 'react';

// function reducer(state, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       return state;
//   }
// }

// function CounterClass() {
//   const [number, dispatch] = useReducer(reducer, 0);

//   const onIncrease = () => {
//     dispatch({ type: 'INCREMENT' });
//   };

//   const onDecrease = () => {
//     dispatch({ type: 'DECREMENT' });
//   };

//   return (
//     <div>
//       <h1>{number}</h1>
//       <button onClick={onIncrease}>+1</button>
//       <button onClick={onDecrease}>-1</button>
//     </div>
//   );
// }

class CounterClass extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     counter : 0
  //   }
    // this.handleIncrease = this.handleIncrease.bind(this);
    // this.handleDecrease = this.handleDecrease.bind(this);
  // }

  state = {
    counter: 0
  };
  
  handleDoubleIncrease = () => {
    this.setState(state => ({
      counter: state.counter + 1
    }));
    this.setState(state => ({
      counter: state.counter + 1
    }));
  }

  handleIncrease = () => {
    this.setState(state => ({
      counter: state.counter + 1
    }), () => {
      console.log(this.state.counter);
    });
  }

  handleDecrease = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  }
  handleDoubleDecrease = () => {
    this.setState({
      counter: this.state.counter - 1
    });
    this.setState({
      counter: this.state.counter - 1
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleDoubleIncrease}>+2</button>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
        <button onClick={this.handleDoubleDecrease}>-2?</button>
      </div>
    )
  }
}

export default CounterClass;