import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { asteroidsBackground } from "./asteroidsBackground";
import { NavLink } from "react-router";
import sunImage from "../../assets/images/sun.png";
import mercuryImage from "../../assets/images/planet-mercury.svg";
import venusImage from "../../assets/images/planet-venus.svg";
import earthImage from "../../assets/images/planet-earth.svg";
import marsImage from "../../assets/images/planet-mars.svg";
import jupiterImage from "../../assets/images/planet-jupiter.svg";
import saturnImage from "../../assets/images/planet-saturn.svg";
import uranusImage from "../../assets/images/planet-uranus.svg";
import neptuneImage from "../../assets/images/planet-neptune.svg";

export const Container = styled(motion.div)`
  position: relative;
  min-height: 100vh;
`;

export const Planet = styled(NavLink)`
  position: absolute;
  top: 50%;
  left: 50%;
  border: 1px solid rgba(102, 166, 229, 0.12);
  border-radius: 1000px;
  transform: translate(-50%, -50%);
  transition: border 300ms ease;

  &::before {
    position: absolute;
    content: "";
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100px;
    transition: transform 300ms ease;
  }

  @keyframes orbit {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }

  @media (min-width: 768px) {
    &:hover {
      border: 1px solid ${(props) => props.$planetColor};

      &::before {
        transform: scale(1.5) translate(-50%, -50%);
      }
    }

    &:focus {
      outline: none;
    }

    &:focus-visible {
      border: 1px solid ${(props) => props.$planetColor};

      &::before {
        transform: scale(1.5) translate(-50%, -50%);
      }
    }

    ${(props) =>
      props.$isActive
        ? css`
            border: 1px solid ${(props) => props.$planetColor};
            &::before {
              transform: scale(1.5) translate(-50%, -50%);
            }
          `
        : ""};
  }
`;

export const Sun = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 100px;
  width: 100px;
  border-radius: 1000px;
  background-image: url(${sunImage});
  background-size: cover;
  box-shadow:
    0 0 10px 2px rgba(255, 107, 0, 0.4),
    0 0 22px 11px rgba(255, 203, 0, 0.13);
  transform: translate(-50%, -50%);
`;

export const Mercury = styled(Planet)`
  width: 120px;
  height: 120px;
  animation: orbit 7.1867343561s linear infinite;
  z-index: 100;

  &::before {
    height: 15px;
    width: 15px;
    background-image: url(${mercuryImage});
    background-size: cover;
  }
`;

export const Venus = styled(Planet)`
  width: 150px;
  height: 150px;
  animation: orbit 18.4555338265s linear infinite;
  z-index: 99;

  &::before {
    height: 22px;
    width: 22px;
    background-image: url(${venusImage});
    background-size: cover;
  }
`;

export const Earth = styled(Planet)`
  width: 195px;
  height: 195px;
  animation: orbit 30s linear infinite;
  z-index: 98;

  &::before {
    width: 24px;
    height: 24px;
    background-image: url(${earthImage});
    background-size: cover;
  }
`;

export const Mars = styled(Planet)`
  width: 240px;
  height: 240px;
  animation: orbit 56.4261314589s linear infinite;
  z-index: 97;

  &::before {
    width: 15px;
    height: 15px;
    background-image: url(${marsImage});
    background-size: cover;
  }
`;

export const Jupiter = styled(Planet)`
  width: 390px;
  height: 390px;
  animation: orbit 355.7228171013s linear infinite;
  z-index: 96;

  &::before {
    width: 44px;
    height: 44px;
    background-image: url(${jupiterImage});
    background-size: cover;
  }
`;

export const Saturn = styled(Planet)`
  width: 490px;
  height: 490px;
  animation: orbit 882.6952471456s linear infinite;
  z-index: 95;

  &::before {
    width: 67px;
    height: 52px;
    background-image: url(${saturnImage});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export const Uranus = styled(Planet)`
  width: 570px;
  height: 570px;
  animation: orbit 2512.4001967933s linear infinite;
  z-index: 94;

  &::before {
    width: 24px;
    height: 24px;
    background-image: url(${uranusImage});
    background-size: cover;
  }
`;

export const Neptune = styled(Planet)`
  width: 680px;
  height: 680px;
  animation: orbit 4911.7838624549s linear infinite;
  z-index: 93;

  &::before {
    width: 24px;
    height: 24px;
    background-image: url(${neptuneImage});
    background-size: cover;
  }
`;

export const AsteroidsBelt = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  border: 1px solid rgba(102, 166, 229, 0.12);
  border-radius: 1000px;
  transform: translate(-50%, -50%);

  height: 330px;
  width: 330px;
  opacity: 0.7;
  border-color: transparent;
  overflow: hidden;
  animation: orbit 179.9558282773s linear infinite;

  &::before {
    position: absolute;
    content: "";
    left: 50%;
    transform: translate(-50%, -50%);
    top: 50%;
    height: 210px;
    width: 210px;
    background: transparent;
    border-radius: 140px !important;
    box-shadow: ${asteroidsBackground};
  }

  @keyframes orbit {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }
`;
