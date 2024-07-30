import React, { useContext, useState } from "react";
import { SearchContext } from "../SearchContext";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const navigate = useNavigate();
  const { setSearchValue } = useContext(SearchContext);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setSearchValue(inputValue);
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        localStorage.setItem("authMessage", "Logout Successful");
        localStorage.setItem("loginMessageShown", "false");
        navigate("/signin");
      })
      .catch((error) => {
        toast.error("Error logging out: " + error.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          style: {
            backgroundColor: "#f44336", // Red background for error
            color: "white", // White text color
            borderRadius: "8px", // Rounded corners
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Shadow for better visibility
            padding: "16px", // Padding inside the toast
          },
          bodyStyle: {
            fontSize: "16px", // Font size
            fontFamily: "Arial, sans-serif", // Font family
          },
          closeButton: false,
        });
      });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark fixed-top">
        <div className="container-fluid text-white">
          <a className="navbar-brand text-white" href="/">
            NewsAPP •
          </a>
          <button
            className="navbar-toggler border-light nbg-light"
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
                <button
                  onClick={() => {
                    setSearchValue("Current News");
                  }}
                  className="nav-link text-secondary cursor-pointer mx-1"
                  aria-current="page"
                >
                  Current News
                </button>
              </li>
              <li className="nav-item">
                <button
                  onClick={() => {
                    setSearchValue("Technology");
                  }}
                  className="nav-link text-secondary cursor-pointer mx-1"
                  aria-current="page"
                >
                  Technology
                </button>
              </li>
              <li className="nav-item">
                <button
                  onClick={() => setSearchValue("News History")}
                  className="nav-link text-secondary cursor-pointer mx-1"
                >
                  News History
                </button>
              </li>
              <li className="nav-item">
                <button
                  onClick={() => setSearchValue("Business")}
                  className="nav-link text-secondary cursor-pointer mx-1"
                >
                  Business
                </button>
              </li>
              <li className="nav-item">
                <button
                  onClick={() => setSearchValue("Entertainment")}
                  className=" nav-link text-secondary cursor-pointer mx-1"
                >
                  Entertainment
                </button>
              </li>
            </ul>
            <form
              className="d-flex"
              role="search"
              onSubmit={handleSearchSubmit}
            >
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
              <button onClick={handleLogout} className="mx-3 btn btn-primary">
                Logout
              </button>
            </form>
          </div>
        </div>
      </nav>
      <ToastContainer />
    </div>
  );
};

export default Navbar;
