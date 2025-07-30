import React, { useState } from 'react';
import './Rewards.css'; 
export default function Rewards()
{
    return(
        <>
        <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  {/* <link rel="stylesheet" href="website2.css" /> */}
  <title>Document</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
  />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous"></link>
  {/* <div className="maincontainer"> */}

  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div style={{backgroundColor:'floralwhite'}} className="container-fluid">
    <img style={{height:'100px', width:'100px', marginLeft:'100px'}} src='https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Coffee_Bean_%26_Tea_Leaf_logo.svg/1200px-Coffee_Bean_%26_Tea_Leaf_logo.svg.png' alt="Logo" className="logo" />
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span classname="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul style={{gap:'40px',marginLeft:'140px'}} className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Menu
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Refreshments
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Coffee
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Tea
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Desserts
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Breads
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                TODAY'S SPECIAL
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Gift Cards
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Rewards
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Subscription
          </a>
        </li> 
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Locations
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Support
          </a>
        </li>  
      </ul>

      
      <form style={{marginRight:'100px', height:'40px'}} className="d-flex" role="search">
        <button className="promotion-button" onClick={handleOrderNowClick}>
          Order Now
        </button>
      </form>
    </div>
  </div>
  </nav>



  <section className="hero">
        <div className="hero-text">
          <h1>SIGN UP & ENJOY 50% OFF YOUR FIRST BEVERAGE!</h1>
          <p>
            Download The Coffee Bean® Rewards app now for exclusive goodies and
            50% off your first beverage to welcome you into the fold.
          </p>
          <div className="buttons">
            <button className="btn purple">Android App</button>
            <button className="btn white">iOS App</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://www.coffeebean.com/cdn/shop/files/CBTL_Rewards_1_full.webp?v=1743021692&width=522" alt="Beverage" />
        </div>
      </section>


  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
        </>
    );
}
