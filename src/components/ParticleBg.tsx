import React, { ReactElement } from 'react'
import loadable from '@loadable/component'
const ParticlesBg = loadable(() => import('particles-bg'))

interface Props {
  children?: ReactElement | undefined;
}

let config = {
  num: [1, 7],
  rps: 0.2,
  radius: [1, 20],
  // life: [1.5, 3],
  // v: [1, 3],
  // tha: [30, 40],
  // body: "./img/icon.png", // Whether to render pictures
  // rotate: [10, 20],
  // alpha: [0.6, 0],
  scale: [0.25, 0.1],
  position: {x:0, y: 0, height:1000, width:1000}, // all or center or {x:1,y:1,width:100,height:100}
  // color: ["random", "#ff0000"],
  // cross: "bound", // cross or bround
  // random: 15,  // or null,
  // emitter: "follow",
  g: 2,    // gravity
  f: [2, -2], // force
  onParticleUpdate: (ctx, particle) => {
    ctx.beginPath();
    ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
    ctx.fillStyle = particle.color;
    ctx.fill();
    ctx.closePath();
  }
};

export default function ParticleBg({children}: Props): ReactElement {
  return (
    <>
      {children}
      <ParticlesBg type="custom" config={config} bg={true} />
      {/* <ParticlesBg type="custom" config={{...config, emitter: null}} bg={true} /> */}
    </>
  )
}
