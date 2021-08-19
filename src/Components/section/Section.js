import { SectionContainer } from "./SectionStyled";

const Section = ({ title, children }) => {
  return (
    <SectionContainer>
      <h2>Course: {title}</h2>
      {children}
    </SectionContainer>
  );
};

export default Section;

// const data = function () {
//   const self = this;
//   console.log("this :>> ", this);
//   return function () {
//     return function () {
//       return function () {
//         console.log(self?.name);
//       };
//     };
//   };
// };

// const obj = {
//   name: "Alex",
//   data,
// };

// obj.data()()()(); //

// // const funct = new Function(a, b, console.log(a + b));

// // funct(5, 10);

// const num = new Number(5);

// const str = new String("lorem");

// const str1 = "lorem";

// console.dir(str);

// console.dir(window);
