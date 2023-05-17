/** @jsx jsx */
import React from "react";
import { Link } from "gatsby";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, EffectFade } from "swiper";
import { Col, Container, Row } from "react-bootstrap";
import { SliderTwoData } from "@/data";
import { jsx } from '@emotion/react'

import {mainSlider}  from '../assets/styles/SliderOne.styles'
import { mainSliderTwo }  from '../assets/styles/SliderTwo.styles'
import { commonBtn, redBg }  from '../assets/styles/layout.styles'

SwiperCore.use([Autoplay, Navigation, EffectFade]);
const SliderTwo = () => {
  const mainSlideOptions = {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    navigation: {
      nextEl: "#main-slider-next",
      prevEl: "#main-slider-prev",
    },
    autoplay: {
      delay: 5000,
    },
  };
  return (
    <section css={[mainSlider,mainSliderTwo]}>
      <Swiper {...mainSlideOptions}>
        {SliderTwoData.map(({ image, subTitle, title, button }, index) => (
          <SwiperSlide key={index}>
            <div
              className="image-layer"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
            <Container>
              <Row>
                <Col lg={12} className="text-left">
                  <p className="main-slider__subtext">{subTitle}</p>
                  <h3 className="main-slider__title">{title}</h3>
                  <Link to={button.url} css={[commonBtn,redBg]}>
                    <span>{button.label}</span>
                  </Link>
                </Col>
              </Row>
            </Container>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev" id="main-slider-prev">
          <i className="fa fa-angle-left"></i>
        </div>
        <div className="swiper-button-next" id="main-slider-next">
          <i className="fa fa-angle-right"></i>
        </div>
      </Swiper>
    </section>
  );
};

export default SliderTwo;
