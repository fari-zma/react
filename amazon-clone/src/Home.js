import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          alt=""
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />

        <div className="home_row">
          <Product
            id="01"
            title="The lean startup"
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            price={29.99}
            rating={3}
          />
          <Product
            id="02"
            title="Kafka on the Shore"
            image="https://m.media-amazon.com/images/I/71H+DyKPwyL._AC_UY218_.jpg"
            price={11.29}
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="03"
            title="Skechers Men's Energy Afterburn Lace-Up Sneaker"
            image="https://m.media-amazon.com/images/I/81zBV4vN1UL._AC_UL320_.jpg"
            price={90.0}
            rating={3}
          />
          <Product
            id="04"
            title="Wrangler Authentics Men's Short Sleeve Classic Woven Shirt"
            image="https://m.media-amazon.com/images/I/91Vq8U5xBrL._AC_UL320_.jpg"
            price={17.99}
            rating={3}
          />
          <Product
            id="05"
            title="Fitbit Versa 2 Health and Fitness Smartwatch with Heart Rate, Music, Alexa Built-In"
            image="https://images-na.ssl-images-amazon.com/images/I/41tttgs4alL._AC_US218_.jpg"
            price={198.95}
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            id="06"
            title="Hisense 40-Inch Class H55 Series Android Smart TV with Voice Remote (40H5500F, 2020 Model)"
            image="https://m.media-amazon.com/images/I/71ZRTMwE3NL._AC_UY218_.jpg"
            price={189.33}
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
