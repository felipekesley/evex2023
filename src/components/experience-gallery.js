/** @jsx jsx */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Element8 from "@/images/elements/element-08.png";
import Arrow from '@/images/icons/arrow-down.svg'
import { TeamOneData, ExperienceGalleryData } from "@/data";
import { Swiper, SwiperSlide } from "swiper/react";
import TeamCard from "@/components/team-card";
import { jsx } from "@emotion/react";
import "swiper/swiper-bundle.min.css";

import {
  team,
  teamSlider,
  moreBt,
  element,
  teamPagination
} from "../assets/styles/ExperienceGallery.styles";

import { commonSection, commonBtn }  from '../assets/styles/layout.styles'

import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

const TeamCarousel = () => {
  const { sectionContent, posts } = TeamOneData;
  const carouselOptions = {
    spaceBetween: 8,
    loop: false,
    slidesPerView: 1,
    pagination: {
      el: "#team-carousel-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: "#main-slider-next",
      prevEl: "#main-slider-prev",
    },
    breakpoints: {
      0: {
        spaceBetween: 8,
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      576: {
        spaceBetween: 8,
        slidesPerView: 1,
        slidesPerGroup: 3,
      },
      992: {
        spaceBetween: 8,
        slidesPerView: 3,
        slidesPerGroup: 1,
      },
      1200: {
        spaceBetween: 8,
        slidesPerView: 3,
        slidesPerGroup: 1,
      },
    },
  };

  return (
    <section css={[team,commonSection]}>
      <Container>
        <Row>
          <Col lg={12}>
             <h2>Lisbon Energy Experience</h2>
             <p>
             As quatro experiências interativas EVEx que nasceram 
             no virtual foram reproduzidas em espaços da Reitoria 
             da NOVA (Auditório, Sala do Senado e Átrio), promovendo, 
             assim, mais de 10 painéis de Lisbon Energy Talks, 
             Lisbon Energy MasterClasses, Lisbon Energy Academy e 
             Lisbon Energy Expo/Business, seguidos de debates, 
             coffee breaks e networking.
             </p>
          </Col>
        </Row>
  </Container>   
    
     <Swiper css={teamSlider} {...carouselOptions}>
      {/* <span id="main-slider-prev">
          <img src={Arrow} />
        </span>
        <span id="main-slider-next">
        <img src={Arrow} />
        </span> */}
        {ExperienceGalleryData.map(({img}, index) => (
          <SwiperSlide key={index}>
            <img src={img} />
          </SwiperSlide>
        ))}
        <div css={teamPagination} className="swiper-pagination" id="team-carousel-pagination"></div>
      </Swiper>
      
      <img css={element} src={Element8} />
   
      
      
    </section>
  );
};

export default TeamCarousel;
