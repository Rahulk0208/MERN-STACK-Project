import React, { useState } from 'react';
import SignupForm from './form'; // adjust path as needed
import './Project.css';
export default function Project() {
  const [showForm, setShowForm] = useState(false);

  const handleOrderNowClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };
    return (
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
  <div className='container'>
    <img style={{width:'1610px',marginLeft:'-200px'}} src="https://www.coffeebean.com/cdn/shop/files/CBTL_Shopify_Desktop_1920px_wide_x_480px__V1_d57f0c88-5344-46f2-a387-562803cf6e6e.png?v=1743084526&width=1920" alt="" />
    <h1 style={{position:'absolute', top:'20%',marginLeft:'-70px',color:'white',fontSize:'27px'}}>SWEET, CREAMY & BOLD</h1>
    <h1 style={{position:'absolute', top:'28%',marginLeft:'-70px',color:'white',fontSize:'60px', fontWeight:'bold'}}>Horchata is our muse.</h1>
    <p style={{position:'absolute',top:'40%',marginLeft:'-70px',color:'white',fontSize:'25px'}}>Sip on our new seasonal menu,
crafted with good taste</p>
<button style={{position:'absolute',top:'55%',color:'blueviolet',backgroundColor:'burlywood',height:'50px',width:'250px',borderRadius:'10px'}}>ORDER NOW</button>
  </div>
  <div style={{border:'1px solid black',width:'1523px',height:'250px',backgroundColor:'white'}} className='container-2'>
      <h2 style={{marginLeft:'520px',marginTop:'40px',fontWeight:'bolder'}}>COFFEE, TEA, POWDERS & MORE</h2>
      <p style={{marginLeft:'600px',marginTop:'40px',fontWeight:'bolder',fontSize:'40px'}}>SHOP FOR HOME</p>
  </div>
  <div style={{border:'transparent', width:'1392.8px',height:'400px',backgroundColor:'white',display:'flex',marginLeft:'130px',gap:'80px'}} className='container-3'>
      <div className="card" style={{width: '23rem'}}>
  <img style={{width:'367px'}} src='https://www.coffeebean.com/cdn/shop/files/CBTL_Homepage_Thumbnail_Coffee.webp?v=1736867193&width=480' className='card-img-top'></img>
  <div className="card-body">
    <h3 style={{marginTop:'50px',fontWeight:'bolder',fontSize:'35px',marginLeft:'5px'}} className="card-title">COFFEE</h3>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p> */}
    <button style={{marginTop:'20px',fontFamily:'sans-serif',borderRadius:'10px',color:'blueviolet',backgroundColor:'white',width:'150px',height:'35px',border:'1px solid white',marginLeft:'-10px'}} href="#" >SHOP COFFEE</button>
  </div>
</div>
<div className="card" style={{width: '23rem'}}>
  <img style={{width:'367px'}} src='https://www.coffeebean.com/cdn/shop/files/CBTL_Homepage_Thumbnail_Tea.png?v=1736867194&width=480' className='card-img-top'></img>
  <div className="card-body">
    <h3 style={{marginTop:'50px',fontWeight:'bolder',fontSize:'35px',marginLeft:'15px'}} className="card-title">TEA</h3>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p> */}
    <button style={{marginTop:'20px',fontFamily:'sans-serif',borderRadius:'10px',color:'blueviolet',backgroundColor:'white',width:'150px',height:'35px',border:'1px solid white',marginLeft:'-16px'}} href="#">SHOP TEA</button>
  </div>
</div>
<div className="card" style={{width: '23rem'}}>
  <img style={{width:'367px'}} src='https://www.coffeebean.com/cdn/shop/files/CBTL_Homepage_Thumbnail_Powders.webp?v=1736867193&width=480' className='card-img-top'></img>
  <div className="card-body">
    <h3 style={{marginTop:'50px',fontWeight:'bolder',fontSize:'35px',marginLeft:'5px'}} className="card-title">POWDERS</h3>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p> */}
    <button style={{marginTop:'20px',fontFamily:'sans-serif',borderRadius:'10px',color:'blueviolet',backgroundColor:'white',width:'150px',height:'35px',border:'1px solid white'}} href="#">SHOP POWDERS</button>
  </div>
</div>
  </div>
  <div style={{height:'100px', width:'max-width'}}>
  <button style={{width:'150px', height:'40px', border:'transparent', color:'white', backgroundColor:'purple', justifyContent:'center', alignItems:'center',display:'flex', marginLeft:'690px', marginTop:'50px'}}>SHOP FOR HOME</button>
</div>
<div
  style={{
    height: '650px',
    width: '100%',
    position: 'relative',
    backgroundImage:
      'url(https://www.coffeebean.com/cdn/shop/files/CBTL_Home_Banner_Desktop_1.webp?v=1736866731&width=1920)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
  >
    <br></br>
  <section class="promo-banner">
    <p class="promo-small">ONLINE ONLY EXCLUSIVE</p>
    <h1>PREMIUM SINGLE ORIGIN K-CUPS</h1>
    <p class="promo-desc">
      Available in Bali Blue Moon, Mexico Organic, Costa Rica, Columbia, Ethiopia, and World Blend ‘63
    </p>
    <button style={{width:'150px', height:'40px', border:'transparent', color:'white', backgroundColor:'purple', justifyContent:'center', alignItems:'center',display:'flex', marginLeft:'670px', marginTop:'50px'}} class="btn">SHOP K-CUPS</button>
  </section>
    <br></br>
    <br></br>
    <br></br>
    <section class="cafe-orders">
    <p>BROWSE MENU & ORDER ONLINE FOR PICKUP</p>
    <h2>CAFÉ ORDERS</h2>
  </section>
    
    {/* <p>Available in Bali Blue Moon, Mexico Organic, Costa Rica, Columbia, Ethiopia, and World Blend ‘63</p> */}
  </div>



  <div className="promotion">
      <div className="promotion-container">
        {/* First Drink 50% Off */}
        <div className="promotion-card">
          <img src="https://www.coffeebean.com/cdn/shop/files/Untitled_design_99.png?v=1743012796&width=480" alt="First Drink Offer" />
          <h2 className="promotion-title">Your First Drink 50% Off</h2>
          <p className="promotion-text">
            Download The Coffee Bean® Rewards app and enjoy member perks and exclusive offers today!
          </p>
          <button className="promotion-button">DOWNLOAD THE APP</button>
        </div>

        {/* Browse Café Menu */}
        <div className="promotion-card">
          <img src="https://www.coffeebean.com/cdn/shop/files/Home_Page_Squares.png?v=1749056138&width=480" alt="Cafe Menu" />
          <h2 className="promotion-title">Browse Café Menu</h2>
          <p className="promotion-text">
            Let your taste travel with every cup. Featuring the Ultimate and CaraMocha Ice Blended® as well as our brand new Ube Coconut.
          </p>
          <button className="promotion-button">VIEW FULL MENU</button>
        </div>

        {/* Start Café Order */}
        <div className="promotion-card">
          <img src="https://www.coffeebean.com/cdn/shop/files/CBTL_Home_Col3.webp?v=1736866731&width=480" alt="Cafe Order" />
          <h2 className="promotion-title">Start Café Order</h2>
          <p className="promotion-text">
            Enjoy your favorite The Coffee Bean & Tea Leaf drink in one of our local cafes or order supplies to make at home.
          </p>
          <button className="promotion-button">ORDER NOW</button>
        </div>
      </div>
    </div>
<br></br>
    <div className="hero">
        <img src="https://www.coffeebean.com/cdn/shop/files/Untitled_design_100.png?v=1743084823&width=1920" alt="Cafe" />
        <button>OUR STORY</button>
      </div>

    


    <section className="newsletter-section">
      <div className="newsletter-content">
        <div className="newsletter-left">
          <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
          <p>Join our email newsletter for 10% off your first order</p>
        </div>
        <div className="newsletter-right">
          <input type="email" placeholder="Your email" />
          <button>SUBSCRIBE</button>
        </div>
        <p className="disclaimer">
          By selecting "Subscribe", you agree to the Coffee Bean and Tea Leaf Privacy Policy and Terms of Service. Unsubscribe from emails at any time. Please note when unsubscribing: it may take up to 10 business days for your request to take effect.
        </p>
      </div>
    </section>


     <footer className="footer">
      {/* Purple top border with background pattern */}
      <div className="footer-top-bar"></div>

      {/* Main footer content */}
      <div className="footer-main">
        <div className="footer-logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWdxf1sUJJUH6HmvkjfycRx3aimroY5ODHBQ&s"
            alt="Coffee Bean Logo"
          />
        </div>

        <div className="footer-columns">
          <div className="footer-column">
            <h4>Our Company</h4>
            <ul>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Caring Cup</a></li>
              <li><a href="#">Franchising</a></li>
              <li><a href="#">Store Locator</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Site Terms</h4>
            <ul>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Do Not Sell or Share My Personal Information ↗</a></li>
              <li><a href="#">Proposition 65</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Customer Care</h4>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Shipping</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div className="footer-bottom">
        <p>
          © 2025 Super Magnificent Coffee Company doing business as The Coffee Bean & Tea Leaf®
        </p>
        <button className="cookie-btn">COOKIE PREFERENCES</button>
      </div>
    </footer>
  
  {/* <div class="iconsss">
  <i class="fa-brands fa-instagram fa-2xl" style="color: rgb(208, 70, 93);"></i>
  <i class="fa-solid fa-envelope fa-2xl" style="color: black;"></i>
  <i class="fa-brands fa-facebook fa-2xl" style="color: rgb(29, 4, 218);"></i>
  <i class="fa-brands fa-youtube fa-2xl" style="color: red;"></i>

    </div> */}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
</>
    );
}
