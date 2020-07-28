import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby';
import SectionHeading from './shared/SectionHeading';
const logo = require('../images/React-icon.svg');


const StyledEvents = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  flex-wrap: wrap;

  .item {
    display: flex;
    justify-content:center;
    align-items:center;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 15px 35px 0 rgba(78, 49, 177, 0.05);
    padding: 30px 20px;
    margin: 24px;
     img {
       margin-right: 12px;
       max-height: 80px;
       max-width: 80px;
     }
     .date {
       font-weight:bold;
       margin-bottom: 4px;
     }
     a {
       text-decoration: none;
     }
     .link {
       padding: 12px 0;
     }
     &:hover {
          box-shadow: 0 20px 25px 0 rgba(212,34,31,0.3);
        }
        @media (max-width: 786px) {
    h1 {
      font-size: 34px;
    }
  }
  }
`;

export default function Events() {
  return (
    <>
      <SectionHeading>Events</SectionHeading>
    <StyledEvents>
      <div className="item">
        <img src={logo} alt="coderation" />
        <div className="info">
          <p className="date">
            20.09.2020
          </p>
          <p className="desc">
            Lorem ipsum dolor sit.
            Lorem ipsum dolor sit.
          </p>
          <Link to="/events/001">
            <p className="link">Read more</p>
          </Link>
        </div>
      </div>
      <div className="item">
        <img src={logo} alt="coderation" />
        <div className="info">
          <p className="date">
            20.09.2020
          </p>
          <p className="desc">
            Lorem ipsum dolor sit.
            Lorem ipsum dolor sit.
          </p>
          <Link to="/events/001">
            <p className="link">Read more</p>
          </Link>
        </div>
      </div>
      <div className="item">
        <img src={logo} alt="coderation" />
        <div className="info">
          <p className="date">
            20.09.2020
          </p>
          <p className="desc">
            Lorem ipsum dolor sit.
            Lorem ipsum dolor sit.
          </p>
          <Link to="/events/001">
            <p className="link">Read more</p>
          </Link>
        </div>
      </div>
      <div className="item">
        <img src={logo} alt="coderation" />
        <div className="info">
          <p className="date">
            20.09.2020
          </p>
          <p className="desc">
            Lorem ipsum dolor sit.
            Lorem ipsum dolor sit.
          </p>
          <Link to="/events/001">
            <p className="link">Read more</p>
          </Link>
        </div>
      </div>
      <div className="item">
        <img src={logo} alt="coderation" />
        <div className="info">
          <p className="date">
            20.09.2020
          </p>
          <p className="desc">
            Lorem ipsum dolor sit.
            Lorem ipsum dolor sit.
          </p>
          <Link to="/events/001">
            <p className="link">Read more</p>
          </Link>
        </div>
      </div>
      <div className="item">
        <img src={logo} alt="coderation" />
        <div className="info">
          <p className="date">
            20.09.2020
          </p>
          <p className="desc">
            Lorem ipsum dolor sit.
            Lorem ipsum dolor sit.
          </p>
          <Link to="/events/001">
            <p className="link">Read more</p>
          </Link>
        </div>
      </div>
      <div className="item">
        <img src={logo} alt="coderation" />
        <div className="info">
          <p className="date">
            20.09.2020
          </p>
          <p className="desc">
            Lorem ipsum dolor sit.
            Lorem ipsum dolor sit.
          </p>
          <Link to="/events/001">
            <p className="link">Read more</p>
          </Link>
        </div>
      </div>

    </StyledEvents>
    </>
  )
}
