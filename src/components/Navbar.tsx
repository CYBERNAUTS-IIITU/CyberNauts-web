import React, { ReactElement } from 'react';
import styled from 'styled-components';


interface Props {
  
}

const NavLink = styled.a`
  text-decoration: none;
  color: #fff;
  opacity: 0.7;
  letter-spacing: 2px;
  font-weight: 400;

  &:hover {
    opacity: 1;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 10vh;
  overflow: hidden;
  background: linear-gradient(330deg, transparent, transparent 11%, rgba(0, 0, 0, 0.02) 11%, rgba(0, 0, 0, 0.02) 32%, transparent 32%, transparent 58%, rgba(0, 0, 0, 0.02) 58%, rgba(0, 0, 0, 0.02) 79%, transparent 79%, transparent), linear-gradient(127deg, #a0459c, #241aa8);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  
  &:first-child {
    cursor: pointer;
    padding-left: 24px;
  }

  & ul {
    display: flex;
    margin-left: auto;
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
      display: none;
    }
  }
`;

function Navbar({}: Props): ReactElement {
  return (
    <Nav>
      <NavLink>Home</NavLink>
      <ul>
        <li><NavLink>About  Us</NavLink></li>
        <li><NavLink>Events</NavLink></li>
        <li><NavLink>Team</NavLink></li>
        <li><NavLink>Projects</NavLink></li>
      </ul>
      <button>Login</button>
    </Nav>
  )
}

export default Navbar
