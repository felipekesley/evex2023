/** @jsx jsx */
import { css } from "@emotion/react";
import { colors } from "./layout.styles";

export const abAgency = css`
  background-color: transparent;

  @media (min-width: 320px) and (max-width: 767px) {
    .container-fluid .row {
      display: flex;
      flex-direction: column-reverse;
    }

    div:nth-of-type(2) {
      padding: 0;
    }
  }

  img {
    width: 100%;
  }
`;

export const pr79 = css`
  @media (min-width: 768px) and (max-width: 990px) {
    padding-right: 15px;
  }
`;

export const mb45 = css`
  margin-bottom: 40px;
  @media (min-width: 768px) and (max-width: 990px) {
    margin-bottom: 30px;
  }
`;

export const about = css`
  position: relative;
  padding: 60px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  color: ${colors.secondaryMain};
  align-items: flex-start;

  @media (min-width: 320px) and (max-width: 767px) {
        padding: 60px 15px 0;
      }

  h2 {
    color: ${colors.primaryMain};
    font-family: "bw_gradual_demomedium";
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: 6px;
    @media (min-width: 320px) and (max-width: 767px) {
        font-size:48px;
      }
    &:after {
      content: "";
      width: 186px;
      height: 3px;
      background-color: #f5f5f5;
      display: block;
      margin-top: -3px;
    }
    img {
      margin-left: 4px;
      width: 56px;
      margin-bottom: 10px;
      @media (min-width: 320px) and (max-width: 767px) {
        display: none;
      }
    }
  }

  p {
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;
    @media (min-width: 320px) and (max-width: 767px) {
        margin-bottom: 0;
      }
  }

  button {
    font-family: "bw_gradual_demomedium";
    :hover {
      font-weight: 600;
    }
  }
`;

export const element01 = css`
  position: absolute;
  width: auto !important;
  top: 0;
  right: -15px;
`;

export const imgFull = css`
  width: 100%;
`;

export const mobileIconEnergy = css`
  display: none;
  @media (min-width: 320px) and (max-width: 767px) {
    position: absolute;
    width: 56px !important;
    display: block;
    bottom: 0;
    right: 20px;
    filter: invert(72%) sepia(11%) saturate(1508%) hue-rotate(329deg)
      brightness(96%) contrast(100%);
  }
`;

export const abImg = css`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;

  &:nth-child(2) {
    position: relative;
    top: 30px;
    margin-top: 0;
    &:after {
      @media (min-width: 768px) and (max-width: 990px) {
        width: 350px;
        left: 15px;
      }
    }
  }

  & img {
    max-width: 100%;
    height: auto;
    -webkit-box-shadow: -2px 4px 30px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: -2px 4px 30px 0px rgba(0, 0, 0, 0.3);
    box-shadow: -2px 4px 30px 0px rgba(0, 0, 0, 0.3);
  }

  @media (min-width: 320px) and (max-width: 767px) {
    position: relative;
    margin: 50px 0 0;
    &:after {
      display: none;
    }
  }
  @media (min-width: 768px) and (max-width: 990px) {
    position: relative;
    float: right;
    right: -5px;
  }
`;
