import React, { useState, useEffect } from "react";
import "./css/Home.css";
import Product from "./Product";

const banners = [
  "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",
  "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg",
  "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Currency_v2_en_US_2x._CB428993290_.jpg",
  "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_en_US_1x._CB431860448_.jpg",
  "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg",
  "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg",
  "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg",
];
let index = 0;

function Home() {
  const [banner, setBanner] = useState(banners[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      changeBanner();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const changeBanner = () => {
    console.log("index ", index);
    if (index === 5) index = 0;
    else index = index + 1;
    setBanner(banners[index]);
  };

  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image" alt="" src={banner} />

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
