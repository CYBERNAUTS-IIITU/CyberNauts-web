import React from 'react'
import styled from 'styled-components';
import * as Icon from 'react-feather';
import SectionHeading from './shared/SectionHeading';
const bg = require('../images/map.svg');

const StyledContact = styled.div`
  /* max-width: 100%; */
  min-height: 450px;
  overflow: hidden;
  border-radius: 5px;
  background: url(${bg});
  background-size: cover;
  background-position: center;
  margin: 12px;
  text-align: center;
  box-shadow: 0 25px 45px 0 rgba(78, 49, 177, 0.2);
  &:hover {
          box-shadow: 0 20px 25px 0 rgba(212,34,31,0.3);
  }

  div {
    padding: 12px;
    .icn {
      min-height: 24px;
      min-width: 24px;
      margin-right: 6px;
    }
    p {
      font-size: 1.2rem;
      letter-spacing: 1.5px;
      padding: 12px 24px;
    }
  }
`;

export default function Contact() {
  return (
    <>
      <SectionHeading>Contact</SectionHeading>
      <StyledContact>
        <div>
          <Icon.Mail className="icn" color="#fd9e4c" />
          <p>cybernautsiiitu@gmail.com</p>
        </div>
        <div>
          <Icon.Phone className="icn" color="#fd9e4c" />
          <p>+91 7017243897</p>
        </div>
        <div>
          <Icon.MapPin className="icn" color="#fd9e4c" />
          <p>Transit Campus-II, IIIT Una Vill. Chandpur, Teh. Haroli, Distt. Una Himachal Pradesh 177220</p>
        </div>
        <a href="https://instagram.com/cybernauts.iiitu" style={{ textDecoration: 'none', color: 'inherit', display: 'inline-block' }} target="_blank">
          <div>
            <Icon.Instagram className="icn" color="#fd9e4c" />
            <p>cybernauts.iiitu</p>
          </div>
        </a>
      </StyledContact>
    </>
  )
}
