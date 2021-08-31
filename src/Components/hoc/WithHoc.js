import React, { Component } from "react";

const withHigherOrderComponent = (callback) => (WrappedComponent) => {
    return class WithHoc extends Component {
      state = {
        message: "Counter",
        counter: 0,
      };
  
      addCount = () => this.setState((prev) => ({ counter: prev.counter + 1 }));
  
      render() {
        callback(this.state.message + ":" + this.state.counter);
        return (
          <>
            <WrappedComponent values={this.state} addCount={this.addCount} />
          </>
        );
      }
    };
  };
  
  export default withHigherOrderComponent;


///////////////////////////////////////////////////////////////////////
// const withHigherOrderComponent = (callback) => (WrappedComponent) => {
//   return class WithHoc extends Component {
//     state = {
//       message: "Counter",
//       counter: 0,
//     };

//     addCount = () => this.setState((prev) => ({ counter: prev.counter + 1 }));

//     render() {
//       callback(this.state.message + ":" + this.state.counter);
//       return (
//         <>
//           <WrappedComponent values={this.state} addCount={this.addCount} />
//         </>
//       );
//     }
//   };
// };

// export default withHigherOrderComponent;

// const controller = function (initialValue) {
//   return function (step) {
//     console.log((initialValue += step));
//   };
// };

// const controller = (initialValue=50) => (step) => (initialValue += step);

// const zoom = controller();
// zoom(2);
// zoom(2);
// zoom(5);
// zoom(2);
// zoom(10);
// zoom(2);

// console.log("__________________________");
// const volume = controller();

// volume(-3);
// volume(-20);
// volume(-3);
// volume(-3);
// volume(-3);
