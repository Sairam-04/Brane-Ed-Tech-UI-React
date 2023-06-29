import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const NewsComponent = () => {
  return (
    <div className="Articles__Div">
      <Carousel
        showArrows={false}
        autoPlay={true}
        interval={3000}
        showIndicators={false}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        stopOnHover={true}
        swipeable={true}
        emulateTouch={true}
        centerMode={true}
        centerSlidePercentage={100}
        dynamicHeight={false}
      >
        <div className="Articles__Div__slide">
        <div className="Articles__Div__slide-Heading">
          Times of India
          </div>
          <div className="Articles__Div__slide-Para">
           Best Platform for Education 
        
          </div>
        </div>
        <div className="Articles__Div__slide">
          <div className="Articles__Div__slide-Heading">
          Forbes
          </div>
          <div className="Articles__Div__slide-Para">
         World's Leading Platform
          </div>
        </div>
        <div className="Articles__Div__slide">
        <div className="Articles__Div__slide-Heading">
          BBC News
          </div>
          <div className="Articles__Div__slide-Para">
           Brane is Brain for future
          </div>
        </div>
        <div className="Articles__Div__slide">
        <div className="Articles__Div__slide-Heading">
          USA Today
          </div>
          <div className="Articles__Div__slide-Para">
          Brane Replaces All
          </div>
        </div>
        <div className="Articles__Div__slide">
        <div className="Articles__Div__slide-Heading">
          American Times
          </div>
          <div className="Articles__Div__slide-Para">
            Brane at #1
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default NewsComponent;
