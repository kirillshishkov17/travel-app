import React, { Component } from "react";
import Slider from "react-slick";

export default class PicSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",

      responsive: [{
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          autoplay: false,
          speed: 500
        }
      }]
    };
    return (
      <div className="slider">
        
        <Slider {...settings}>
          <div>
            <img width={450} height={400} src="./img/first.jpg" alt=""/>
          </div>
          <div>
            <img width={455} height={400} src="./img/second.jpg" alt=""/>
          </div>
          <div>
            <img width={455} height={400} src="./img/three.jpg" alt=""/>
          </div>
          <div>
            <img width={455} height={400} src="./img/four.jpg" alt=""/>
          </div>
        </Slider>
      </div>
    );
  }
}