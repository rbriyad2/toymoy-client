import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import bannerimg1 from "../../../public/img/11.jpg";
import bannerimg2 from "../../../public/img/22.jpg";
import bannerimg3 from "../../../public/img/33.jpg";
import bannerimg4 from "../../../public/img/55.jpg";
import Products from "../../components/products/Products";
import Company from "../../components/Company/Company";
import Shorts from "../../components/Shorts/Shorts";
import FbStotys from "../../components/FbStotys/FbStotys";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const toysproduct = useLoaderData()
  const images = [
    { url: bannerimg1 },
    { url: bannerimg2 },
    { url: bannerimg3 },
    { url: bannerimg4 },
    { url: bannerimg1 },
    { url: bannerimg2 },
  ];

  return (
    <section className="banner">
      <div className="container mx-auto">
        <section>
          <SimpleImageSlider
            width="1536px"
            height={500}
            images={images}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
            autoPlayDelay={4}
          />
        </section>
        <section>
          <Products toysproduct={toysproduct}></Products>
        </section>
        <section>
            <Company></Company>
        </section>
        <Shorts></Shorts>
        <FbStotys></FbStotys>
      </div>
    </section>
  );
};

export default Home;
