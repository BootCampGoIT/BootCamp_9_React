// import axios from "axios";
// import React, { Component } from "react";

// const BASE_URL = "fghjkl";

// class temp extends Component {
//   state = {
//     images: [],
//     search: "",
//     page: 1, //10
//   };

//   componentDidUpdate(prevProps, prevState) {
//     window.scrollTo({
//         top: document.documentElement.scrollHeight,
//         behavior: 'smooth',
//       });
//   }

//   getImages = async (page = 1) => {
//     try {
//       const response = await axios.get(
//         BASE_URL + `?search=${this.state.search}&page=${page}`
//       );
//       if (page === 1) {
//         this.setState({ images: response.data.hits, page: 2 });
//       } else {
//         this.setState((prev) => ({
//           images: [...prev.images, ...response.data.hits],
//           page: prev.page + 1, //3
//         }));
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   onHandleChange = (e) => {
//     this.setState({ search: e.target.value });
//   };

//   loadMore = () => {
//     this.getImages(this.state.page); //2
//   };

//   render() {
//     return (
//       <>
//         <form onSubmit={this.getImages}>
//           <input
//             type='text'
//             value={this.state.search}
//             onChange={this.onHandleChange}
//           />
//           <button type='submit'>Search</button>
//         </form>
//         <ul>
//           {this.state.images.map((image) => (
//             <li>
//               <img src={image} alt='' />
//             </li>
//           ))}
//         </ul>
//         <button type='button' onClick={this.loadMore}>
//           LoadMore
//         </button>
//       </>
//     );
//   }
// }

// export default temp;

