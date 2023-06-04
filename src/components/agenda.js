/** @jsx jsx */
import React from "react";
import { TransicoesEnergeticasData, AgendaData } from "@/data";
import { Col, Container, Row } from "react-bootstrap";
import { jsx } from "@emotion/react";

import {
  abAgency,
  pr79,
  mb45,
  about,
  element05,
  dateBlock,
  blocks,
  asideBlock
} from "../assets/styles/Agenda.styles";
import {
  secTitle,
  subtitle,
  secDesk,
  commonSection,
  commonBtn,
  redBg,
  noPaddingRight,
} from "../assets/styles/layout.styles";

const Agenda = () => {
  const { sectionContent, element } = TransicoesEnergeticasData;
  return (
    <section css={[abAgency]}>
      <Container fluid>
        <Row>
          <Col css={pr79} lg={12} md={12} sm={12}>
            <div css={about}>
              <h2 css={[secTitle, mb45]}>Agenda</h2>
              <p css={secDesk}>{sectionContent.text}</p>
            </div>
          </Col>
        </Row>

        <div css={blocks}>
          <Row>
            {AgendaData.map(({ date, day }, index) => (
              <Col lg={6} md={6} sm={12}>
                <div css={dateBlock} key={index}>
                  <h3>{date}</h3>
                  <p>{day}</p>
                  <p>Horário de Brasília</p>
                </div>
                <div css={asideBlock}></div>
              </Col>
            ))}
          </Row>
        </div>
        <img css={element05} src={element} />
      </Container>
    </section>
  );
};

export default Agenda;
