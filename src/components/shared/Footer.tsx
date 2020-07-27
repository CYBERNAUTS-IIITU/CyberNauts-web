import React from 'react';
import styled from 'styled-components';
const bg = require('../../images/waves-02.png');
const logo = require('../../images/CyberNauts-Logo.png');

const StyledFooter = styled.footer`
  height: 100%;
  padding-top: 135px;
  position: relative;
  z-index: 1;
  background: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  color: rgba(255,255,255, 0.8);

  img {
    max-width: 100%;
    margin: 0 auto;
  }

  p.copy {
    font-size: 1.1rem;
    text-align: center;
    padding: 24px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;
 
const Footer = () => {
  return (
    <StyledFooter>
      <img src={logo} alt="cybernauts logo" />
      <p className="copy">No &copy; copyright. Feel free to use designs.</p>
    </StyledFooter>
  )
}

export default Footer
