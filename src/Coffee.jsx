import React from "react";
import  './Coffee.css';
import { useState } from "react";
export default function Coffee() {
    return (
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="website2coffee.css" />
  <title>COFFEE</title>
  {/* Bootstrap CSS */}
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  {/* Font Awesome */}
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
  />
  {/* Google Fonts */}
  <link
    href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;600;700&display=swap"
    rel="stylesheet"
  />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Noto+Serif:ital,wght@0,100..900;1,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
    crossOrigin="anonymous"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        .footer {\n            background-color: #f8f8f8;\n            padding: 20px 0;\n            text-align: center;\n        }\n        .footer i {\n            margin: 0 10px;\n            font-size: 1.5rem;\n        }\n    "
    }}
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
      <a className="nav-link" href="website2tea.html">
        TEA
      </a>
      <a className="nav-link" href="website2coffee.html">
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
  <div className="container my-5">
    <div className="row g-4">
      {/* Left Card */}
      <div className="col-md-6">
        <div className="card h-100">
          <div className="card-body">
            <h5
              className="card-title"
              style={{ fontSize: 40, fontWeight: "bold" }}
            >
              COLD BREW COFFEE
            </h5>
            {/* <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6> */}
            <p className="card-text" style={{ fontSize: 20, marginTop: 40 }}>
              Our signature Cold Brew Coffee is a premium blend of Bali Blue
              Moon and Ethiopia Yirgacheffe coffees with chicory steeped cold
              for 20 hours for rich, vibrant flavors.
            </p>
            <button className="btn btn-primary" style={{ marginTop: 20 }}>
              ORDER NOW
            </button>
          </div>
        </div>
      </div>
      {/* Right Card */}
      <div className="col-md-6">
        <div className="card h-100">
          <div className="card-body">
            <img
              width={600}
              src="https://www.seriouseats.com/thmb/d_swuilkL-RdPSraL5HZ-9LcIec=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__06__20200619-cold-brew-coffee-daniel-gritzer-2-d00e5b0992ce4553b768231be21b75be.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container my-5">
    <div className="row g-4">
      {/* Left Card */}
      <div className="col-md-6">
        <div className="card h-100">
          <div className="card-body">
            <h5
              className="card-title"
              style={{ fontSize: 40, fontWeight: "bold" }}
            >
              VANILLA BEAN COLD BREW
            </h5>
            {/* <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6> */}
            <p className="card-text" style={{ fontSize: 20, marginTop: 40 }}>
              Steeped over time to bring out maximum flavor, The Coffee Bean
              &amp; Tea Leaf Cold Brew Coffee is mixed with milk and real
              vanilla bean sauce, resulting in a refreshing and flavorful cup
              that goes down smoothly.
            </p>
            <p className="card-text" style={{ fontSize: 20, marginTop: 40 }}>
              Those who enjoy a slightly sweet, creamy cold coffee with surely
              love the Vanilla Bean Cold Brew Latte. This can also be customized
              with a plant-based milk, making it a completely plant-based
              coffee.
            </p>
            <button className="btn btn-primary" style={{ marginTop: 20 }}>
              ORDER NOW
            </button>
          </div>
        </div>
      </div>
      {/* Right Card */}
      <div className="col-md-6">
        <div className="card h-100">
          <div className="card-body">
            <img
              width={600}
              src="https://athome.starbucks.com/sites/default/files/styles/recipe_banner_xlarge/public/2024-05/VanillaSweetCreamColdBrew_RecipeHeader_848x539_%402x.jpg.webp?itok=Ag9R5ipS"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container my-5">
    <div className="row g-4">
      {/* Left Card */}
      <div className="col-md-6">
        <div className="card h-100">
          <div className="card-body">
            <h5
              className="card-title"
              style={{ fontSize: 40, fontWeight: "bold" }}
            >
              CARAMEL COLD BREW LATTE
            </h5>
            {/* <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6> */}
            <p className="card-text" style={{ fontSize: 20, marginTop: 40 }}>
              Caramel Cold Brew. Its name alone is enticing enough for both
              coffee connoisseurs and casual coffee drinks to want to try!
            </p>
            <p className="card-text" style={{ fontSize: 20, marginTop: 40 }}>
              The added caramel flavor gives our Cold Brew Coffee a subtle
              sweetness that doesn’t overpower the innate flavors of the base
              drink, resulting in a delightfully luscious cup.
            </p>
            <button className="btn btn-primary" style={{ marginTop: 20 }}>
              ORDER NOW
            </button>
          </div>
        </div>
      </div>
      {/* Right Card */}
      <div className="col-md-6">
        <div className="card h-100">
          <div className="card-body">
            <img
              width={600}
              src="https://www.loveandoliveoil.com/wp-content/uploads/2017/06/coffee-caramel-milkshakesH.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container my-5">
    <div className="row g-4">
      {/* Left Card */}
      <div className="col-md-6">
        <div className="card h-100">
          <div className="card-body">
            <h5
              className="card-title"
              style={{ fontSize: 40, fontWeight: "bold" }}
            >
              MIDNIGHT MOCHA COLD BREW LATTE
            </h5>
            {/* <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6> */}
            <p className="card-text" style={{ fontSize: 20, marginTop: 40 }}>
              As our mocha drinks are consistent bestsellers at The Coffee Bean
              &amp; Tea Leaf, we think mocha lovers deserve to experience the
              cold and bold flavors of our Cold Brew Coffee.
            </p>
            <p className="card-text" style={{ fontSize: 20, marginTop: 40 }}>
              Our Cold Brew Midnight Mocha is a blend of our time-perfected cold
              brew and dark chocolate with the right amount of sweetness and a
              naturally occurring hint of berries. A must-try for mocha fans!
            </p>
            <button className="btn btn-primary" style={{ marginTop: 20 }}>
              ORDER NOW
            </button>
          </div>
        </div>
      </div>
      {/* Right Card */}
      <div className="col-md-6">
        <div className="card h-100">
          <div className="card-body">
            <img
              width={600}
              src="https://cdn.prod.website-files.com/652f1dc57f648485e3aee801/67965c528273ea76bf81a026_epmqv9x-xqv3iD0GIVQB0_image.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container my-5">
    <div className="row g-4">
      {/* Left Card */}
      <div className="col-md-6">
        <div className="card h-100">
          <div className="card-body">
            <h5
              className="card-title"
              style={{ fontSize: 40, fontWeight: "bold" }}
            >
              VIETNAMESE COLD BREW COFFEE
            </h5>
            {/* <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6> */}
            <p className="card-text" style={{ fontSize: 20, marginTop: 40 }}>
              This traditional treat, sometimes called “ca phe sua da”, combines
              sweetened condensed milk with our dark-roasted Cold Brew Coffee to
              create our spin on a wildly popular Vietnamese café staple.
            </p>
            {/* <p class="card-text" style="font-size:20px;margin-top:40px;">Our Cold Brew Midnight Mocha is a blend of our time-perfected cold brew and dark chocolate with the right amount of sweetness and a naturally occurring hint of berries. A must-try for mocha fans!</p */}
            <button className="btn btn-primary" style={{ marginTop: 20 }}>
              ORDER NOW
            </button>
          </div>
        </div>
      </div>
      {/* Right Card */}
      <div className="col-md-6">
        <div className="card h-100">
          <div className="card-body">
            <img
              width={600}
              src="https://www.allrecipes.com/thmb/LlegF5NeKOTHqs9WZw5RWWwSyjU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/77768-Vietnamese-Iced-Coffee-DDMFS-4x3-62f34e1d4658433a83801c8533dbcafe.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container my-5">
    <div className="row g-4">
      {/* Left Card */}
      <div className="col-md-6">
        <div className="card h-100">
          <div className="card-body">
            <h5
              className="card-title"
              style={{ fontSize: 40, fontWeight: "bold" }}
            >
              CAFFEINE FREE COFFEE
            </h5>
            {/* <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6> */}
            <p className="card-text" style={{ fontSize: 20, marginTop: 40 }}>
              Come visit us, be it yourself or together with your family and
              loved ones, to enjoy high quality coffees, espresso, lattes, cold
              brew coffee, teas, Ice Blended® drinks &amp; more!
            </p>
            {/* <p class="card-text" style="font-size:20px;margin-top:40px;">Our Cold Brew Midnight Mocha is a blend of our time-perfected cold brew and dark chocolate with the right amount of sweetness and a naturally occurring hint of berries. A must-try for mocha fans!</p */}
            <button className="btn btn-primary" style={{ marginTop: 20 }}>
              ORDER NOW
            </button>
          </div>
        </div>
      </div>
      {/* Right Card */}
      <div className="col-md-6">
        <div className="card h-100">
          <div className="card-body">
            <img
              width={600}
              src="https://cbtl-images.s3.us-west-1.amazonaws.com/Production/Drupal/s3fs-public/styles/cafe_menu_item_teaser/public/cafe-menu/hot_chocolate.jpg?itok=-i2iKHk1"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer */}
  <div className="footer">
    <p>
      <i className="fa-regular fa-copyright text-danger" /> All copyright
      reserved by Rahul
    </p>
    <div>
      <i className="fa-brands fa-instagram text-danger" />
      <i className="fa-solid fa-envelope" />
      <i className="fa-brands fa-facebook text-primary" />
      <i className="fa-brands fa-youtube text-danger" />
    </div>
  </div>
</>
    );
}