import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from './shared/Button';
import ParticleBg from './ParticleBg';
import Typist from 'react-typist';
const notebook = require('../images/notebook.png');
const cloud = require('../images/cloud.svg');
const man1 = require('../images/man-01.svg');
const man2 = require('../images/man-02.svg');
const e1 = require('../images/el-01.svg');
const e2 = require('../images/el-02.svg');
const process = require('../images/process.svg');
const blob = require('../images/shape-01.png');

interface Props {

}

const Container = styled.main`
  height: 90vh;
  max-width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;

  .left {
    max-width: 40vw;
    margin-top: -12vh;
    h1 {
      color: #a0459c;
      font-size: 4rem;
      letter-spacing: 5px;
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
    & .img-1 {
      /* el 1 */
      position: absolute;
      top: 0;
      left: 0;
    }

    & .img-2 {
      /* cloud */
      position: absolute;
      top: -50px;
      left: 280px;
    }

    & .img-3 {
      /* man 1 */ 
      position: absolute;
      top: 150px;
      left: 0;
    }

    & .img-4 {
      /* el 2 */ 
      position: absolute;
      top: 0;
      left: 0;
    }

    & .img-5 {
      /* man 2 */ 
      position: absolute;
      top: 350px;
      left: 220px;
    }

    & .img-6 {
      /* process  */ 
      position: absolute;
      top: 400px;
      left: 0;
    }
  }

  & .blob {
    position: absolute;
    top: 65vh;
    left: -220px;
    z-index:-5;
  }

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    width: 100%;
    .left {
      max-width: 100%;
      /* margin: -25vh auto; */
       margin-top: -12vh;
      margin-left: 16px; 

      h1 {
        font-size: 2.5rem;
      }
    }
    .right {
      display: none;
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
            <Button>Explore</Button>

            </motion.div>
          </div>
          <div className="right">
            <img className="img-1" src={e1} alt="cloud-svg" />
            <img className="img-2" src={cloud} alt="cloud-svg" />
            <img className="img-3" src={man1} alt="cloud-svg" />
            <img className="feat-img" src={notebook} alt="laptop" />
            <img className="img-4" src={e2} alt="cloud-svg" />
            <img className="img-5" src={man2} alt="cloud-svg" />
            <img className="img-6" src={process} alt="cloud-svg" />
          </div>
          <img className="blob" src={blob} alt="shape" />
        </Container>
      </ParticleBg>
    </>
  )
}

export default Hero
