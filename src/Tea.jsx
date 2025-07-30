import React from "react";
import { useState } from "react";
import './Tea.css';
export default function Tea() {
    return (
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="website2tea.css" />
  <title>TEA</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
    crossOrigin="anonymous"
  />
  <nav
    className="navbar"
    style={{ backgroundColor: "rgba(164, 50, 240, 0.211)" }}
  >
    {/* Navbar content */}
    <div className="container-fluid">
      <a className="navbar-brand">
        <img
          width={100}
          height={100}
          src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Coffee_Bean_%26_Tea_Leaf_logo.svg/1200px-Coffee_Bean_%26_Tea_Leaf_logo.svg.png"
        />{" "}
      </a>
      <a className="nav-link active" aria-current="page" href="website2.html">
        Home
      </a>
      {/* <a class="nav-link" href="#">CAFFE MENU</a> */}
      <div className="dropdown-center">
        <button
          style={{ backgroundColor: "#e3f2", color: "black" }}
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          CAFFE MENU
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              PIZZA
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              CAKES
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              RESFRESHMENTS
            </a>
          </li>
        </ul>
      </div>
      <a className="nav-link" href="Tea.jsx">
        TEA
      </a>
      <a className="nav-link" href="Coffee.jsx">
        COFFEE
      </a>
      <a className="nav-link" href="website2sides.html">
        SIDES
      </a>
      <a className="nav-link" href="website2giftcards.html">
        GIFT CARDS
      </a>
      <a className="nav-link" href="#">
        ORDER STATUS
      </a>
      <button type="button" className="btn btn-info position-relative">
        USER
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          25%
          <span className="visually-hidden">unread messages</span>
        </span>
      </button>
    </div>
  </nav>
  {/* CAFFEE MENU */}
  <div className="orders">
    <div className="order1">
      <div className="textcontent">
        <p className="tagline8">ICED BREW TEA</p>
        <p className="description7">
          Our signature Cold Brew Coffee is a premium blend of Bali Blue Moon
          and Ethiopia Yirgacheffe coffees with chicory steeped cold for 20
          hours for rich, vibrant flavors.{" "}
        </p>
        {/* <div class="button-row">
          <button class="btnreserve4">ORDER NOW</button>
          <div class="row-container">
          <button class="button2">-</button>
          <p>0</p>
          <button class="button3">+</button>
          </div>
          <button class="button1">Add to Cart</button>
      </div> */}
        <div className="button-row">
          <button className="btnreserve4">ORDER NOW</button>
          <div className="quantity-controls">
            <button
              style={{ backgroundColor: "black", color: "white" }}
              className="quantity-btn decrement"
            >
              -
            </button>
            <p className="quantity">0</p>
            <button
              style={{ backgroundColor: "black", color: "white" }}
              className="quantity-btn increment"
            >
              +
            </button>
          </div>
          <button className="button1">Add to Cart</button>
        </div>
        <div className="photu">
          <img
            width={600}
            height={460}
            style={{
              borderRadius: 20,
              boxShadow: "0px 20px 15px rgb(98, 85, 60)"
            }}
            src="https://cbtl-images.s3.us-west-1.amazonaws.com/Production/Drupal/s3fs-public/styles/story_square_image/public/story-detail-images/The%20Coffee%20Bean%20%26%20Tea%20Leaf%20Mango%20Cold%20Brew%20Tea-min.jpg?itok=jKbdEpW9"
            alt="Delicious Food"
          />
        </div>
      </div>
    </div>
    <div className="order2">
      <div className="textcontent">
        <p className="tagline9">HIBICUS BERRY SUNRISE TEA</p>
        <p className="description8">
          Steeped over time to bring out maximum flavor, The Coffee Bean &amp;
          Tea Leaf Cold Brew Coffee is mixed with milk and real vanilla bean
          sauce, resulting in a refreshing and flavorful cup that goes down
          smoothly.
        </p>
        <p className="description8">
          Those who enjoy a slightly sweet, creamy cold coffee with surely love
          the Vanilla Bean Cold Brew Latte. This can also be customized with a
          plant-based milk, making it a completely plant-based coffee.
        </p>
        <div className="button-row">
          <button className="btnreserve5">ORDER NOW</button>
          <div
            style={{ marginTop: "auto", marginBottom: 20 }}
            className="quantity-controls"
          >
            <button
              style={{ backgroundColor: "black", color: "white" }}
              className="quantity-btn decrement"
            >
              -
            </button>
            <p className="quantity">0</p>
            <button
              style={{ backgroundColor: "black", color: "white" }}
              className="quantity-btn increment"
            >
              +
            </button>
          </div>
          <button
            style={{ marginTop: "auto", marginBottom: 10 }}
            className="button1"
          >
            Add to Cart
          </button>
        </div>
        <div className="photu2">
          <img
            width={600}
            height={460}
            style={{
              borderRadius: 20,
              boxShadow: "0px 20px 15px rgb(98, 85, 60)"
            }}
            src="https://cbtl-images.s3.us-west-1.amazonaws.com/Production/Drupal/s3fs-public/styles/cafe_menu_item_teaser/public/cafe-menu/22FAL_Hibiscus_CafeMenu_1125x1020_r3.jpg?itok=QktyMrV_"
            alt="Delicious Food"
          />
        </div>
      </div>
    </div>
    <div className="order3">
      <div className="textcontent">
        <p className="tagline10">HERBAL INFUSION TEA</p>
        <p className="description9">
          Caramel Cold Brew. Its name alone is enticing enough for both coffee
          connoisseurs and casual coffee drinks to want to try!
        </p>
        <p className="description9">
          The added caramel flavor gives our Cold Brew Coffee a subtle sweetness
          that doesn’t overpower the innate flavors of the base drink, resulting
          in a delightfully luscious cup.
        </p>
        <div className="button-row">
          <button className="btnreserve6">ORDER NOW</button>
          <div
            style={{ marginTop: "auto", marginBottom: 20 }}
            className="quantity-controls"
          >
            <button
              style={{ backgroundColor: "black", color: "white" }}
              className="quantity-btn decrement"
            >
              -
            </button>
            <p className="quantity">0</p>
            <button
              style={{ backgroundColor: "black", color: "white" }}
              className="quantity-btn increment"
            >
              +
            </button>
          </div>
          <button
            style={{ marginTop: "auto", marginBottom: 10 }}
            className="button1"
          >
            Add to Cart
          </button>
        </div>
        <div className="photu3">
          <img
            width={600}
            height={460}
            style={{
              borderRadius: 20,
              boxShadow: "0px 20px 15px rgb(98, 85, 60)"
            }}
            src="https://cbtl-images.s3.us-west-1.amazonaws.com/Production/Drupal/s3fs-public/styles/cafe_menu_item_teaser/public/cafe-menu/Hot_African_Sunrise_Tea.jpg?itok=-SeJU6Wc"
            alt="Delicious Food"
          />
        </div>
      </div>
    </div>
    <div className="order4">
      <div className="textcontent">
        <p className="tagline11">DECAF TEA</p>
        <p className="description10">
          As our mocha drinks are consistent bestsellers at The Coffee Bean
          &amp; Tea Leaf, we think mocha lovers deserve to experience the cold
          and bold flavors of our Cold Brew Coffee.
        </p>
        <p className="description10">
          Our Cold Brew Midnight Mocha is a blend of our time-perfected cold
          brew and dark chocolate with the right amount of sweetness and a
          naturally occurring hint of berries. A must-try for mocha fans!
        </p>
        <div className="button-row">
          <button style={{ marginBottom: 100 }} className="btnreserve7">
            ORDER NOW
          </button>
          <div
            style={{ marginTop: "auto", marginBottom: 110 }}
            className="quantity-controls"
          >
            <button
              style={{ backgroundColor: "black", color: "white" }}
              className="quantity-btn decrement"
            >
              -
            </button>
            <p className="quantity">0</p>
            <button
              style={{ backgroundColor: "black", color: "white" }}
              className="quantity-btn increment"
            >
              +
            </button>
          </div>
          <button
            style={{ marginTop: "auto", marginBottom: 100 }}
            className="button1"
          >
            Add to Cart
          </button>
        </div>
        <div className="photu4">
          <img
            width={600}
            height={460}
            style={{
              borderRadius: 20,
              boxShadow: "0px 20px 15px rgb(98, 85, 60)"
            }}
            src="https://cbtl-images.s3.us-west-1.amazonaws.com/Production/Drupal/s3fs-public/styles/cafe_menu_item_teaser/public/cafe-menu/Hot_Green_Tea_0.jpg?itok=7FOzUcTm"
            alt="Delicious Food"
          />
        </div>
      </div>
    </div>
    <div className="order5">
      <div className="textcontent">
        <p className="tagline12">ICED TEA LATTE</p>
        <p className="description11">
          This traditional treat, sometimes called “ca phe sua da”, combines
          sweetened condensed milk with our dark-roasted Cold Brew Coffee to
          create our spin on a wildly popular Vietnamese café staple.
        </p>
        <div className="button-row">
          <button className="btnreserve8">ORDER NOW</button>
          <div className="quantity-controls">
            <button
              style={{ backgroundColor: "black", color: "white" }}
              className="quantity-btn decrement"
            >
              -
            </button>
            <p className="quantity">0</p>
            <button
              style={{ backgroundColor: "black", color: "white" }}
              className="quantity-btn increment"
            >
              +
            </button>
          </div>
          <button className="button1">Add to Cart</button>
        </div>
        <div className="photu5">
          <img
            width={600}
            height={460}
            style={{
              borderRadius: 20,
              boxShadow: "0px 20px 15px rgb(98, 85, 60)"
            }}
            src="https://cbtl-images.s3.us-west-1.amazonaws.com/Production/Drupal/s3fs-public/styles/cafe_menu_item_teaser/public/cafe-menu/Iced-Tea-Latte_0.jpg?itok=jrvFX6uz"
            alt="Delicious Food"
          />
        </div>
      </div>
    </div>
    <div className="order6">
      <div className="textcontent">
        <p className="tagline13">BLACK TEA</p>
        <p className="description12">
          Come visit us, be it yourself or together with your family and loved
          ones, to enjoy high quality coffees, espresso, lattes, cold brew
          coffee, teas, Ice Blended® drinks &amp; more!
        </p>
        <div className="button-row">
          <button className="btnreserve9">ORDER NOW</button>
          <div className="quantity-controls">
            <button
              style={{ backgroundColor: "black", color: "white" }}
              className="quantity-btn decrement"
            >
              -
            </button>
            <p className="quantity">0</p>
            <button
              style={{ backgroundColor: "black", color: "white" }}
              className="quantity-btn increment"
            >
              +
            </button>
          </div>
          <button className="button1">Add to Cart</button>
        </div>
        <div className="photu6">
          <img
            width={600}
            height={460}
            style={{
              borderRadius: 20,
              boxShadow: "0px 20px 15px rgb(98, 85, 60)"
            }}
            src="https://cbtl-images.s3.us-west-1.amazonaws.com/Production/Drupal/s3fs-public/styles/cafe_menu_item_teaser/public/cafe-menu/Hot_Black_Tea.jpg?itok=FJGwftk5"
            alt="Delicious Food"
          />
        </div>
      </div>
    </div>
  </div>
</>

    );
}