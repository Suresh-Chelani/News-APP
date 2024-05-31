// import React, { Component } from 'react';
// // import PropTypes from 'prop-types';

// export default class Navbar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       inputValue: '',
//     };
//   }

//   handleInputChange = (event) => {
//     this.setState({ inputValue: event.target.value });
//   };

//   handleSearchSubmit = (event) => {
//     event.preventDefault();
//     this.props.onSearchChange(this.state.inputValue);
//   };

//   render() {
//     return (
//       <div>
//         <nav className="navbar navbar-expand-lg bg-body-tertiary">
//           <div className="container-fluid">
//             <a className="navbar-brand" href="/">Navbar</a>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarSupportedContent"
//               aria-controls="navbarSupportedContent"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                 <li className="nav-item">
//                   <a className="nav-link active" aria-current="page" href="/">Home</a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="/">About</a>
//                 </li>
//               </ul>
//               <form className="d-flex" role="search" onSubmit={this.handleSearchSubmit}>
//                 <input
//                   value={this.state.inputValue}
//                   onChange={this.handleInputChange}
//                   className="form-control me-2"
//                   type="search"
//                   placeholder="Search"
//                   aria-label="Search"
//                 />
//                 <button className="btn btn-outline-success" type="submit">
//                   Search
//                 </button>
//               </form>
//             </div>
//           </div>
//         </nav>
//       </div>
//     );
//   }
// }

import React, { useContext, useState } from 'react';
import { SearchContext } from '../SearchContext';

const Navbar = () => {
  const { setSearchValue } = useContext(SearchContext);
  const [inputValue, setInputValue] = useState('');


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setSearchValue(inputValue);
  };


  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark fixed-top">
        <div className="container-fluid text-white">
          <a className="navbar-brand text-white" href="/">NewsAPP •</a>
          <button
            className="navbar-toggler border-light bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-lg-0">
              <li className="nav-item">
                <button onClick={() => {setSearchValue('Current News') }} className="nav-link text-secondary  cursor-pointer mx-1" aria-current="page">Current News</button>
              </li>
              <li className="nav-item">
                <button onClick={() => {setSearchValue('Technology')}} className="nav-link text-secondary  cursor-pointer mx-1" aria-current="page" >Technology</button>
              </li>
              <li className="nav-item">
                <button onClick={() => setSearchValue('News History')} className="nav-link text-secondary  cursor-pointer mx-1">News History</button>
              </li>
              <li className="nav-item">
                <button onClick={() => setSearchValue('Business')} className="nav-link text-secondary cursor-pointer mx-1" >Business</button>
              </li>
              <li className="nav-item">
                <button onClick={() => setSearchValue('Entertainment')} className=" nav-link text-secondary  cursor-pointer mx-1" >Entertainment</button>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
              <input
                value={inputValue}
                onChange={handleInputChange}
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
