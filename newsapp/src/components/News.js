
// using the class base component for the practies~
// import React, { Component } from 'react'
// // import PropTypes from 'prop-types'

// import NewsItem from './NewsItem';

// export default class News extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       article: [],
//       loading: true,
//     };

//   }
  
//   async componentDidMount() {
//     const {searchValue} = this.props;
//     console.log(searchValue ? searchValue : "suresh");  // Debug line to check prop value
//     let url = `https://newsapi.org/v2/everything?q=${searchValue}&apiKey=1b631584230347caaedcc8f864c2a9e3`;
//     try {
//       let data = await fetch(url);
//       let jsonData = await data.json();
//       this.setState({
//         article: jsonData.articles || [],
//         loading: false,
//       });
//     } catch (error) {
//       console.error("Error fetching data: ", error);
//       this.setState({
//         loading: false,
//       });
//     }
//   }

//   render() {
//     return (
//       <div className='container my-5'>
      
//         <h1>News Main Heading</h1>
//         {this.state.loading ? (
//           <div>Loading...</div>
//         ) : (
//           <div className="row">
//             {this.state.article.map((element) => {
//               return (
//                 <div className="col-md-4 my-2" key={element.url}>
//                   <NewsItem 
//                     title={element.title ? element.title.slice(0, 45) : ""} 
//                     dis={element.description ? element.description.slice(0, 88) : ""} 
//                     imgUrl={element.urlToImage} 
//                     url={element.url} 
//                   />
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     );
//   }
// }
// using the function base component~
import React, { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../SearchContext';
import NewsItem from './NewsItem';

const News = () => {
  const { searchValue } = useContext(SearchContext);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let apiKey = ""; // use your api key. this is genrating by this website: https://newsapi.org/ 
      let url = `https://newsapi.org/v2/everything?q=${searchValue}&apiKey=${apiKey}`;
      try {
        let data = await fetch(url);
        let jsonData = await data.json();
        setArticles(jsonData.articles || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [searchValue]);

  return (
    <div className='container my-5'>
      <h1 style={{marginTop:'83px', textAlign:'center'}}>News and Articles of {searchValue === 'jaipur' ? "Jaipur": searchValue}</h1>
      {loading ? (
        <div className="d-flex justify-content-center my-5 align-item-center">
        <div className="spinner-border text-dark"></div>
        </div>
      ) : (
        <div className="row">
          {articles.filter(article => article.urlToImage).map((element) => (
            <div className="col-md-4 my-3 d-flex justify-content-center" key={element.url}>
              <NewsItem 
                title={element.title ? element.title.slice(0, 45) : ""} 
                dis={element.description ? element.description.slice(0, 88) : ""} 
                imgUrl={element.urlToImage} 
                url={element.url} 
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default News;
