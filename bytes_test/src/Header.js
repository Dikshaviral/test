import React from "react";
import "./header.css";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" id="nav">
      <div className="container-fluid">
        <a className="navbar-brand" href="/" >
          <img src={"https://images.unsplash.com/photo-1533682901015-8b1c46a9d5a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMzUzMzU2MA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"} alt="logo" className="logo" />
        </a>
        <button
          className="navbar-toggler"
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/about">
                Product
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/about">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/about">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    

      
   
    </nav>
    
  );
}
