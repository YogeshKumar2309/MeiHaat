import React from "react";
import Food from "../../../components/ui/Card/Food.jsx";
import Carousel from "../../../components/features/customer/FoodItem/Carousel.jsx";

const HomePage = () => {
  return (
    <>
      <div>
        <section>
          {/* carousel */}
          <Carousel />
        </section>

        <section >
          <div className="flex flex-wrap justify-around">
            <Food />
            <Food />
            <Food />
            <Food />
            <Food />
            <Food />
            <Food />
            <Food />
            <Food />
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
