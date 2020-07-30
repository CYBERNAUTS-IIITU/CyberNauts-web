import React from 'react'
import styled from 'styled-components'

const imgAlt = require('../images/team/img.jpg');

const StyledMember = styled.div`
  .card {
    position: relative;
    width: 350px;
    height: 400px;
    margin: 24px;
    border-radius: 5px;
    box-shadow: 0 15px 35px 0 rgba(78, 49, 177, 0.05);
    .overlay {
      border-radius: 15px;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: rgba(0,0,0,0.25);
    }
    img {
      height: 100%;
      width: 100%;
    }
    .info {
      position: absolute;
      top: 75%;
      left: 35px;
      p {
        color: #fff;
        font-size: 1.2rem;
        font-weight: 300;
        letter-spacing: 2px;
      }

      p:nth-child(2) {
        font-size: 1rem;
      }
    }
    .contact {
      position: absolute;
      top: 90%;
      left: 35px;
      i {
        color: #fff;
        margin: 6px;
        font-size: 1.2rem;
        cursor: pointer;
      }
    }
    &:hover {
      box-shadow: 0 20px 25px 0 rgba(212,34,31,0.3);
    }
  }

  @media (max-width: 400px) {
    .card {
      height: 350px;
      width: 300px;
      .info {
        top: 70%;
      }
      .contact {
        top: 85%;
      }
    }
  }
`;

export default function Member({name, img, role, ig,tw,ln, web}) {
  return (
    <StyledMember>
      <div className="card">
        <div className="overlay"></div>
        <img src={img || imgAlt} alt=""/>
        <div className="info">
          <p>{name}</p>
          <p>{role}</p>
        </div>
        <div className="contact">
          {ln && <a href={ln}><i className="fa fa-linkedin"></i></a>}
          {ig && <a href={ig}><i className="fa fa-instagram"></i></a>}
          {tw && <a href={tw}><i className="fa fa-twitter"></i></a>}
          {web && <a href={web}><i className="fa fa-globe"></i></a>}
        </div>
      </div>
    </StyledMember>
  )
}
