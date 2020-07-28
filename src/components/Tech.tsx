import React, { ReactElement } from 'react'
import styled from 'styled-components';
import LeftBlob from './shared/LeftBlob';
import RightBlob from './shared/RightBlob';
import ParticleBg from './ParticleBg';
import SectionHeading from './shared/SectionHeading';
const webd = require('../images/webd-alt.png');
const appd = require('../images/appd.png');

interface Props {

}

const StylesTech = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: auto;
  width: 100%;
  min-height: 90vh;
  overflow: hidden;

  h1 {
    margin: 48px 0;
    text-align: center;
    background-image: linear-gradient(96deg, #fd9e4c, #f60d45);
    text-shadow: 0 5px 10px rgba(249, 60, 72, 0.2);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #fd9e4c;
    font-size: 54px;
    line-height: 38.6px;
    font-weight: 800;
  }

  .tech-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 80%;
    .tech-item {
      background: #fafafa;
      color: rgba(0,0,0,0.6);
      padding: 24px;
      padding-bottom: 48px;
      margin: 24px;
      height: 50vh;
      width: 50vh;
      text-align: center;
      font-size: 1.2rem;
      font-weight: bold;
      box-shadow: 0 20px 70px 0 rgba(125, 70, 211, 0.3);
      transition: all 0.3s ease-in-out;
      border-radius: 10px;
      &:hover {
          box-shadow: 0 20px 25px 0 rgba(212,34,31,0.3);
        }

      img {
        height: 100%;
        width: 100%;
      }
    }
  }
   @media (max-width: 786px) {
    h1 {
      font-size: 34px;
    }
  }
 
`;

function Tech({ }: Props): ReactElement {
  return (
    <StylesTech>
      <ParticleBg />
      <LeftBlob />
      <RightBlob />
      <SectionHeading>We Work With</SectionHeading>
      <div className="tech-list">
        <div className="tech-item">
          <img src={webd} alt="react.js" />
            <p>Web Development</p>
        </div>
        <div className="tech-item">
          <img src={appd} alt="react.js" />
            <p>App Development</p>
        </div>
      </div>
    </StylesTech>
  )
}

export default Tech
