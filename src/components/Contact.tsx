import React from 'react'
import styled from 'styled-components';
import * as Icon from 'react-feather';
import SectionHeading from './shared/SectionHeading';
import { motion } from 'framer-motion';
const bg = require('../images/map.svg');

const StyledContact = styled.div`
  display: flex;
  justify-content: sapce-around;
  align-items: center;
  background: url(${bg});
  height: 80vh;
  width: 90%;
  padding: 24px;
  margin: auto;
  box-shadow: 0 25px 45px 0 rgba(78, 49, 177, 0.2);
  &:hover {
          box-shadow: 0 20px 25px 0 rgba(212,34,31,0.3);
        }


  .side-img {
    width: 40vw;
    height: 40vh;
  }

  div {
    display: flex;
    justify-content: flex-start;
    align-items:center;
    margin-bottom: 48px;
    padding: 12px;

    
    .icn {
      min-height: 28px;
      min-width: 28px;
    }
    p {
      margin: 12px 24px ;
      font-size: 1.2rem;
      letter-spacing: 2px;
    }
  }

  @media (max-width: 800px) {
    .side-img {
      display: none;
    }

    div {
      justify-content: center;
    }
  }
`;

export default function Contact() {
  return (
    <>
      <SectionHeading>Contact</SectionHeading>
      <StyledContact>
        <div>
          <motion.div
             animate={{ scale: [1, 0.8, 1] }}
             transition={{ duration: 1.5, loop: Infinity }}
          >
            <Icon.Code className="side-img" color="grey" />
          </motion.div>
        </div>
        <section>
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
          <a href="https://instagram.com/cybernauts.iiitu" style={{textDecoration: 'none', color: 'inherit', display: 'inline-block'}} target="_blank">
        <div>
          <Icon.Instagram className="icn" color="#fd9e4c" />
          <p>cybernauts.iiitu</p>
        </div>
          </a>
        </section>
      </StyledContact>
    </>
  )
}
