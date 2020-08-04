import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Footer from '../components/shared/Footer'
import SectionHeading from '../components/shared/SectionHeading';
import ParticleBg from '../components/ParticleBg';
const p1 = require('../images/p1.jpg');
const p2 = require('../images/pro2.png');
const pro3 = require('../images/pro3.png');
const p3 = require('../images/p3.gif');


const List = styled.div`
  .cards-list {
  z-index: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.card {
  margin: 30px auto;
  width: 300px;
  height: 300px;
  border-radius: 40px;
  box-shadow: 5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22);
  cursor: pointer;
  transition: 0.4s;
}

.card .card_image {
  width: inherit;
  height: inherit;
  border-radius: 40px;
}

.card .card_image img {
  width: inherit;
  height: inherit;
  border-radius: 40px;
  object-fit: cover;
}

.card .card_title {
  text-align: center;
  border-radius: 0px 0px 40px 40px;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 30px;
  margin-top: -150px;
  height: 40px;
}

.sub {
  text-align: center;
  border-radius: 0px 0px 40px 40px;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 16px;
  margin-top: 25px;
  color: #fff;
}


.card:hover {
  transform: scale(0.9, 0.9);
  box-shadow: 5px 5px 30px 15px rgba(0,0,0,0.25), 
    -5px -5px 30px 15px rgba(0,0,0,0.22);
}

.title-white {
  color: white;
}

.title-black {
  color: black;
}

@media all and (max-width: 500px) {
  .card-list {
    /* On small screens, we are no longer using row direction but column */
    flex-direction: column;
  }
}
`;

function ProjectCard({ cardClass, image, link, title, sub }) {
  return (
    <a href={link}>
      <div className={`card ${cardClass}`}>
        <div className="card_image"> <img src={image} alt="project title" /> </div>
        <div className="card_title title-white">
          <p>{title}</p>
        </div>
        <p className="sub">{sub}</p>
      </div>
    </a>
  );
}

const projectList = [
  {
    title: 'TheJSGuy.me',
    sub: 'Modern portfolio website with blog',
    cardClass: '1',
    link: 'https://thejsguy.me',
    image: p1
  },
  {
    title: 'Color Guessing Game',
    sub: 'A simple game using JavaScript',
    cardClass: '2',
    link: 'https://colorgamebyjohari.netlify.app/',
    image: p2
  },
  {
    title: '',
    // sub: 'Website for CyberNauts IIITU',
    cardClass: '3',
    link: 'https://cybernauts-iiitu.web.app',
    image: pro3
  },
  {
    title: 'E-Price Tracker',
    sub: 'Selected at NIT KKR TechFest finals',
    cardClass: '1',
    link: 'https://github.com/pkspyder007/Excalibur',
    image: p3
  },
];

export default function Projects() {
  return (
    <>
    <Navbar />
    <SectionHeading style={{marginTop: '11vh'}} >
      Projects
    </SectionHeading>
    <ParticleBg />
    <List>
      <div className="cards-list">

        {projectList.map(({title, image, link, cardClass, sub}, i) => {
          return (<ProjectCard key={i} title={title} link={link} cardClass={cardClass} image={image} sub={sub} />)
        })}

      </div>
    </List>
    <Footer />
    </>
  )
}
