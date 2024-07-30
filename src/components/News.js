// import React, { useContext, useEffect, useState } from 'react';
// import { SearchContext } from '../SearchContext';
// import NewsItem from './NewsItem';
// import { auth } from "./firebase";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// const News = () => {
//   const { searchValue } = useContext(SearchContext);
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [authChanged, setAuthChanged] = useState(false);

//   useEffect(() => {
//     if (!authChanged) {
//       toast.success("Login Successful", {
//         position: "top-center",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         bodyClassName: "custom-toast-body",
//         closeButton: false,
//       });
//       setAuthChanged(true);
//     }
//   }, [auth, authChanged]);

  

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       // let apiKey = "1b631584230347caaedcc8f864c2a9e3"; // use your api key. this is genrating by this website: https://newsapi.org/ 
//       // let url = `https://bharat-24-7-api.onrender.com/api/database?publishedAt=${searchValue}`;
//       // let url = `https://newsapi.org/v2/everything?q=${searchValue}&apiKey=${apiKey}`;
//       let url = `https://api-for-iit.onrender.com/news?q=${searchValue}`;
//       try {
//         let data = await fetch(url);
//         let jsonData = await data.json();
//         setArticles(jsonData || []);   //setArticles(jsonData.article... || []);
//         setLoading(false);
//         console.log(jsonData);
//       } catch (error) {
//         console.error("Error fetching data: ", error);
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, [searchValue]);

//   return (
//     <div className='container my-5'>
//       <ToastContainer/>
//       <h1 style={{marginTop:'83px', textAlign:'center'}}>News and Articles of {searchValue === 'jaipur' ? "Jaipur": searchValue}</h1>
//       {loading ? (
//         <div className="d-flex justify-content-center my-5 align-item-center">
//         <div className="spinner-border text-dark"></div>
//         </div>
//       ) : (
//         <div className="row">
//           {articles.map((element) => (
//             <div className="col-md-4 my-3 d-flex justify-content-center" key={element.url}>
//               <NewsItem 
//                 title={element.title ? element.title.slice(0, 45) : ""} 
//                 dis={element.description ? element.description.slice(0, 88) : ""} 
//                 imgUrl={element.urlToImage} 
//                 url={element.url} 
//               />
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default News;
import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../SearchContext";
import NewsItem from "./NewsItem";
import { auth } from "./firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const News = () => {
  const { searchValue } = useContext(SearchContext);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [authChanged, setAuthChanged] = useState(false);

  useEffect(() => {
    const hasShownMessage = localStorage.getItem("loginMessageShown");

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user && !authChanged && hasShownMessage !== "true") {
        toast.success("Login Successful", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          bodyClassName: "custom-toast-body",
          closeButton: false,
        });
        setAuthChanged(true);
        localStorage.setItem("loginMessageShown", "true");
      }
    });

    return () => unsubscribe();
  }, [authChanged]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let url = `https://api-for-iit.onrender.com/news?q=${searchValue}`;
      try {
        let data = await fetch(url);
        let jsonData = await data.json();
        setArticles(jsonData || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [searchValue]);

  return (
    <div className="container my-5">
      <ToastContainer />
      <h1 style={{ marginTop: "83px", textAlign: "center" }}>
        News and Articles of {searchValue === "jaipur" ? "Jaipur" : searchValue}
      </h1>
      {loading ? (
        <div className="d-flex justify-content-center my-5 align-item-center">
          <div className="spinner-border text-dark"></div>
        </div>
      ) : (
        <div className="row">
          {articles.map((element) => (
            <div
              className="col-md-4 my-3 d-flex justify-content-center"
              key={element.url}
            >
              <NewsItem
                title={element.title ? element.title.slice(0, 45) : ""}
                dis={
                  element.description ? element.description.slice(0, 88) : ""
                }
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
