import React from "react";
import { Link } from "gatsby";
import { SEO } from "../components_example/seo";
import '../styles/404.css';

const fof = require('../images/404.svg');
const earth = require('../images/earth.svg');
const moon = require('../images/moon.svg');
const rocket = require('../images/rocket.svg');
const astronaut = require('../images/astronaut.svg');
const bg_purple = require('../images/bg_purple.png');


const NotFoundPage: React.FC = () => (
  <>
    <div className="bg-purple" style={{background: `url(${bg_purple})` }}>

      <div className="stars">

          <div className="central-body">
            <img className="image-404" src={fof} width="300px" />
              <Link to="/" className="btn-go-home">GO BACK HOME</Link>
            </div>
            <div className="objects">
              <img className="object_rocket" src={rocket} width="40px" />
                <div className="earth-moon">
                  <img className="object_earth" src={earth} width="100px" />
                    <img className="object_moon" src={moon} width="80px" />
                </div>
                    <div className="box_astronaut">
                      <img className="object_astronaut" src={astronaut} width="140px" />
                </div>
                    </div>
                    <div className="glowing_stars">
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>

                    </div>
  </div>
    </div>
  </>
);

export default NotFoundPage;
