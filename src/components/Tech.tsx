import React, { ReactElement } from 'react'
import styled from 'styled-components';
import LeftBlob from './shared/LeftBlob';
import RightBlob from './shared/RightBlob';
import ParticleBg from './ParticleBg';
const reactLogo = require( '../images/React-icon.svg');

interface Props {

}

const StylesTech = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: auto;
  width: 100%;
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
      margin: 24px;
      height: 150px;
      width: 150px;
      text-align: center;
      font-size: 1.2rem;
      font-weight: bold;
      box-shadow: 0 20px 70px 0 rgba(125, 70, 211, 0.3);
      transition: all 0.3s ease-in-out;
      border-radius: 10px;
      &:hover {
          box-shadow: 0 20px 25px 0 rgba(212,34,31,0.3);
        }
    }
  }
`;

function Tech({ }: Props): ReactElement {
  return (
    <StylesTech>
      <ParticleBg />
      <LeftBlob />
      <RightBlob />
      <h1>We Work With</h1>
      <div className="tech-list">
        <div className="tech-item">
          <img src={reactLogo} alt="react.js" />
          React.JS
        </div>
        <div className="tech-item">
          <img src={reactLogo} alt="react.js" />
          Gatsby.JS
        </div>
        <div className="tech-item">
          <img src={reactLogo} alt="react.js" />
          Next.JS
        </div>
        <div className="tech-item">
          <img src={reactLogo} alt="react.js" />
          Node.JS
        </div>
        <div className="tech-item">
          <img src={reactLogo} alt="react.js" />
          Firebase
        </div>
        <div className="tech-item">
          <img src={reactLogo} alt="react.js" />
          Flutter
        </div>
        <div className="tech-item">
          <img src={reactLogo} alt="react.js" />
          React Native
        </div>
        <div className="tech-item">
          <img src={reactLogo} alt="react.js" />
          SaSS
        </div>
        <div className="tech-item">
          <img src={reactLogo} alt="react.js" />
          TypeScript
        </div>
        <div className="tech-item">
          <img src={reactLogo} alt="react.js" />
          JavaScript
        </div>
        <div className="tech-item">
          <img src={reactLogo} alt="react.js" />
          BootStrap
        </div>

        <div className="tech-item">
          <img src={reactLogo} alt="react.js"/>
          HTML
        </div>

        <div className="tech-item">
          <img src={reactLogo} alt="react.js"/> 
          CSS
        </div>
      </div>
    </StylesTech>
  )
}

export default Tech