import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from './shared/Button';
import ParticleBg from './ParticleBg';
import Typist from 'react-typist';
import { Link } from 'gatsby';
const notebook = require('../images/iiit-una-logo.png');
// const cloud = require('../images/cloud.svg');
// const man1 = require('../images/man-01.svg');
// const man2 = require('../images/man-02.svg');
// const e1 = require('../images/el-01.svg');
// const e2 = require('../images/el-02.svg');
// const process = require('../images/process.svg');
const blob = require('../images/shape-01.png');

interface Props {

}

const Container = styled.main`
  height: 100vh;
  max-width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;

  .left {
    max-width: 40vw;
    /* margin-top: -12vh; */
    h1 {
      color: #a0459c;
      font-size: 4rem;
      letter-spacing: 5px;
      font-weight: 700;
    }
    p {
      color: #989898;
      font-family: 'Lora';
      font-size: 1.5rem;
      margin: 24px 0 48px 12px;
    }
  }

  & .right {
    position: relative;
    /* margin-left: -50px; */
  }

  & .blob {
    position: absolute;
    top: 65vh;
    left: -220px;
    z-index:-5;
  }

  @media (max-width: 1000px) {

    .left {
      padding: 14px;
      h1 {
        font-size: 2.8rem;
      }
      p {
        font-size: 1.3rem;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    .left {
      max-width: 100%;
      padding: 24px;
      h1 {
        font-size: 2.4rem;
      }
    }
    .right {
      margin-top: -12vh;
      .feat-img {
        max-height: 150px;
      }
    }
  }
`;


function Hero({ }: Props): ReactElement {
  return (
    <>
      <ParticleBg>
        <Container>
          <div className="left">
              <h1>
                <Typist
                  avgTypingDelay={80}
                  cursor={{
                    show: true,
                    blink: true,
                    element: '|',
                    hideWhenDone: true,
                  }}
                >
                  &lt;CyberNauts/&gt;
              </Typist>
              </h1>
              <p>Web & Mobile Development Club IIIT UNA</p>
            <motion.div
              animate={{ scale: [1, 0.95, 1] }}
              transition={{ duration: 1.3, loop: Infinity }}
            >
            <Link to="#about">
              <Button>Explore</Button>
            </Link>

            </motion.div>
          </div>
          <div className="right">
            {/* <img className="img-1" src={e1} alt="cloud-svg" /> */}
            {/* <img className="img-2" src={cloud} alt="cloud-svg" /> */}
            {/* <img className="img-3" src={man1} alt="cloud-svg" /> */}
            <img className="feat-img" src={notebook} alt="laptop" />
            {/* <img className="img-4" src={e2} alt="cloud-svg" /> */}
            {/* <img className="img-5" src={man2} alt="cloud-svg" /> */}
            {/* <img className="img-6" src={process} alt="cloud-svg" /> */}
          </div>
          <img className="blob" src={blob} alt="shape" />
        </Container>
      </ParticleBg>
    </>
  )
}

export default Hero
