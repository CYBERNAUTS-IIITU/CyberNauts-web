import React, { ReactElement } from 'react';
import styled from 'styled-components';
import {Link}  from 'gatsby';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
  overflow: hidden;
  background: linear-gradient(330deg, transparent, transparent 11%, rgba(0, 0, 0, 0.02) 11%, rgba(0, 0, 0, 0.02) 32%, transparent 32%, transparent 58%, rgba(0, 0, 0, 0.02) 58%, rgba(0, 0, 0, 0.02) 79%, transparent 79%, transparent), linear-gradient(127deg, #a0459c, #241aa8);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;


  & ul {
    display: flex;
    margin: auto;
    list-style: none;
    & li {
      cursor: pointer;
      margin-left: 24px;
      position: relative;

      &:after {
        content: '';
        height: 4px;
        width: 4px;
        border-radius: 50%;
        background: #fb6d4a;
        position: absolute;
        top: 50%;
        margin-top: -2px;
        right: -10px;
      }

      a {
        text-decoration: none;
        color: #fff;
        opacity: 0.7;
        letter-spacing: 2px;
        font-weight: 400;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
  & button {
    outline: none;
    border: none;
    border-radius:0;
    height: 100%;
    width: 235px;
    margin-left: auto;
    color: #fff;
    font-size: 1.3rem;
    font-weight: 700;
    background-image: linear-gradient(113deg, #fd9e4c, #f60d45);
    text-align: center;
    letter-spacing: 3px;
    cursor: pointer;
  }

  @media (max-width: 786px) {
    ul {
      /* display: none; */
      /* margin: auto; */
    }
  }
`;

function Navbar(): ReactElement {
  return (
    <Nav id="home">
      <ul>
        {/* <li><Link to="/about">About</Link></li> */}
        <li> <Link to="/">Home</Link></li>
        <li><Link to="/about">About  Us</Link></li>
        <li><Link to="/about">Tech</Link></li>
        <li><Link to="/about">Projects</Link></li>
      </ul>
      {/* <button>Login</button> */}
    </Nav>
  )
}

export default Navbar
