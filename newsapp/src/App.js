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
import Navbar from './components/Navbar';
import News from './components/News';

class App extends Component {
  render() {
    return (
      <SearchProvider>
        <div>
          <Navbar />
          <News />
        </div>
      </SearchProvider>
    );
  }
}

export default App;

