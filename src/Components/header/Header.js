import Navigation from "./navigation/Navigation";

const Header = ({ headerLinks }) => {
  return (
    <header>
      <a href='/#'>IT-education platform</a>
      <Navigation headerLinks={headerLinks} />
    </header>
  );
};

export default Header;

// const DOM = {
//   div: {
//     id: "root",
//     children: {
//       header: {
//         children: {
//           a: {
//             href: "",
//             textContent: "IT-education platform",
//           },
//           nav: {
//             children: {
//               ul: {
//                 children: {
//                   li: {
//                     children: {
//                       a: {
//                         textContent: "",
//                       },
//                     },
//                   },
//                   li: {
//                     children: {
//                       a: {
//                         textContent: "",
//                       },
//                     },
//                   },
//                 },
//               },
//             },
//           },
//         },
//       },
//     },
//   },
// };
