import React, { useState } from "react";

const initialState = {
  isOpen: false,
  input: "",
};

const Toggler = () => {
  const [state, setState] = useState(initialState);

  const toggle = () => {
    setState((prev) => ({ ...prev, isOpen: !prev.isOpen }));
    // setIsOpen(true);
  };
  const onHandleChange = (e) =>
    setState((prev) => ({ ...prev, input: e.target.value }));

  return (
    <>
      <h2>Toggler</h2>
      <input type='text' value={state.input} onChange={onHandleChange} />
      <button type='button' onClick={toggle}>
        {state.isOpen ? "Hide" : "Show"}
      </button>
      {state.isOpen && <p>Lorem ipsum dolor sit amet.</p>}
    </>
  );
};

export default Toggler;

// class Toggler extends Component {
//   state = {
//     isOpen: false,
//   };
//   toggle = () => this.setState((prev) => ({ isOpen: !prev.isOpen }));
//   render() {
//     return (
//       <>
//         <h2>Toggler</h2>
//         <button type='button' onClick={this.toggle}>
//           Show
//         </button>
//         {this.state.isOpen && <p>Lorem ipsum dolor sit amet.</p>}
//       </>
//     );
//   }
// }

// export default Toggler;

// ---------------------------
//Копирование по ссылке и по значению
// const stateTest = (initialValue) => {
//   const obj = {
//     value: initialValue,
//     setValue(newValue) {
//       obj.value = newValue;
//     },
//   };

//   return [obj.value, obj.setValue]; //копируется по значению
//   return [obj, obj.setValue]; //копируется по ссылке
// };

// const [data, setData] = stateTest(10);
// console.log(data);
// setData(20);
// console.log(data);
// console.log(data.value); //копируется по ссылке
