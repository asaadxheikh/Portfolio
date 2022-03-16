import React from "react";
import Particles from "react-particles-js";

function Particle() {
  return (
    <Particles
      params={{
        
        particles: {
          number: {
            value: 300,
            density: {
              enable: true,
              value_area: 2500,
            },
          },
          line_linked: {
            enable: true,
            opacity: 0.13,
          },
          move: {
            direction: "right",
            speed: 0.5,
          },
          size: {
            value: 5,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb:3,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
