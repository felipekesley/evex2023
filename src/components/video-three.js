/** @jsx jsx */
import React, { Fragment, useState } from "react";
import { VideoThreeData } from "@/data";
import ModalVideo from "react-modal-video";
import SectionTitle from "@/components/section-title";
import Element05 from "@/images/elements/element-05.svg"
import "react-modal-video/css/modal-video.min.css";
import { Col, Container, Row } from "react-bootstrap";
import { jsx } from '@emotion/react'

import { 
  whatWedo, 
  videoWrap, 
  playVideo,
  element05,
  video
}  from '../assets/styles/videoThree.styles'

import {
  commonSection
} from "../assets/styles/layout.styles";

const VideoThree = () => {
  const [isOpen, setOpen] = useState(false);
  const { sectionContent, video } = VideoThreeData;
  return (
    <Fragment>
      <section css={[commonSection,whatWedo]}>
        <Container>
          {/* <Row>
            <Col lg={12} className="text-center">
              <SectionTitle data={sectionContent} />
            </Col>
          </Row> */}
          <Row>
            <Col lg={12}>
             <section css={video}>
              <div css={videoWrap} className="mb-0"> 
                  <div css={playVideo}>
                    <a
                      className="video_popup"
                      onClick={e => {
                        e.preventDefault();
                        setOpen(true);
                      }}
                      href="#"
                    >
                      <i className="fa fa-play"></i>
                    </a>
                    {/* <h2>{video.title}</h2> */}
                  </div>
                </div>
                <img css={element05} src={Element05} />
             </section>
             
            </Col>
          </Row>
        </Container>
      </section>
      {(typeof(window) !== 'undefined') && <ModalVideo
        channel="vimeo"
        autoplay
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        videoId="672843429"
        />
        }
    </Fragment>
  );
};

export default VideoThree;
