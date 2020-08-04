import React, { ReactElement } from 'react'
import styled from 'styled-components'
import Button from './shared/Button';
import { motion } from 'framer-motion';
const waves = require('../images/waves-01.png');

interface Props {
  children?: ReactElement;
}

const StyledAbout = styled.section`
  /* height: 100vh; */
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  position: relative;
  z-index: 1;
  text-align: center;
  
  /* .title {
    position: absolute;
    top: -18px;
    left: 50vw;
    font-size: 2.5rem;
    color: #989898;
  } */

  .left {
    max-width: 300px;
    padding: 24px;
  }

  & .left p {
    font-size: 15rem;
    color: #fd9e4c;
  }

  .right {
    /* width: 60%; */
    max-width: 600px;
    margin: 50px 0;
    .info {
      padding: 48px;
      /* padding-right: 12px; */
      text-align: left;
      text-transform: capitalize;
      letter-spacing: 1px;
      line-height: 32px;
      box-shadow: 0 10px 25px 0 rgba(212, 34, 31, 0.3);
    }

    & p {
      font-size: 1.2rem;
      span {
        font-size: 1.5rem;
        color: #fd9e4c;
        font-weight: bold;
      }
    }

    & button {
      /* margin: auto; */
      margin-top: 24px;
    }
  }

  @media (max-width: 786px) {
    & .left p {
      font-size: 10rem;
      margin-bottom: -100px;
      margin-top: 12px;
    }

    .right {
      width: 80%;

      .info {
        font-size: 8rem;
        letter-spacing: 1px;
        padding: 24px;
        p {
          font-size: 1rem;
        }
      }
    }
  }

  .waves {
    max-width: 100%;
  }
`;

function About({ }: Props): ReactElement {
  return (
    <StyledAbout id="about">
      {/* <strong className="title">What Is CyberNauts?</strong> */}
      <div className="left">
      <div>
          <motion.div
             animate={{ scale: [1, 0.8, 1] }}
             transition={{ duration: 1.5, loop: Infinity }}
          >
            <p>?</p>
          </motion.div>
        </div>
      </div>
      <div className="right">
        <div className="info">
          <p><span>CyberNauts</span> is one of the technical clubs of Indian Institute of Information Technology Una currenlety operating at transit campus II.</p>
          <p>We are focused in developing the Web and mobile development community in our institute. </p>
          <p>We organize workshop on the various aspects of learning web and mobile development.</p>
          {/* <Button>Know More {'>'}</Button> */}
        </div>
      </div>
      <img className="waves" src={waves} alt="waves" />
    </StyledAbout>
  )
}

export default About
