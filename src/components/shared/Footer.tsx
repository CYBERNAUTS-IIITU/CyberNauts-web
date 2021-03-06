import React from 'react';
import styled from 'styled-components';
const bg = require('../../images/waves-02.png');
const logo = require('../../images/CyberNauts-Logo.png');
const iiitulogo = require('../../images/iiit-una-logo.png');
const StyledFooter = styled.footer`
  height: 100%;
  padding-top: 135px;
  /* position: relative; */
  z-index: 1;
  background: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  color: rgba(255,255,255, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  img {
    max-width: 100%;
  }
  
  .iiitu {
    width: 200px;
    height: 200px;
    margin: 24px;
    animation: 1.5s ease-in-out infinite pulse;
  }

  p.copy {
    font-size: 12px;
    text-align: center;
    padding: 24px;
    text-transform: uppercase;
    letter-spacing: 1.5px;  
  }

  @keyframes pulse {
  0% {
      transform: scale(1);
    }
  50% {
      transform: scale(1.1);
    }
  100% {
      transform: scale(1);
    }
  }
`;
 
const Footer = () => {
  return (
    <StyledFooter>
      <img className="iiitu" src={iiitulogo} alt="IIIT Una logo" />
      {/* <img src={logo} alt="cybernauts logo" /> */}
      <p className="copy">No &copy; copyright. Feel free to use designs.</p>
    </StyledFooter>
  )
}

export default Footer
