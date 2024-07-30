// import React, { Component } from 'react';
// import Navbar from './components/Navbar';
// import News from './components/News';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       searchValue: ''
//     };
//   }

//   handleSearchChange = (newSearchValue) => {
//     this.setState({ searchValue: newSearchValue });
//     // console.log(this.state.searchValue);
//   };

//   render() {
//     return (
//       <div>
//         <Navbar onSearchChange={this.handleSearchChange} />
//         <News searchValue={this.state.searchValue} />
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import { SearchProvider } from './SearchContext';
import Home from './Home';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './ProtectedRoute';

class App extends Component {
  render() {
    return (
      <SearchProvider>
        <AuthProvider>
          <Router>
            <div>
              <Routes>
                <Route path="/" element={<ProtectedRoute element={Home} />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
              </Routes>
            </div>
          </Router>
        </AuthProvider>
      </SearchProvider>
    );
  }
}

export default App;





