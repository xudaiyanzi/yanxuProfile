import React from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from 'react';
import './ParticleBg.css';

const ParticleBg = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

  return (
    <>
        <Particles id='tsparticles' 
            init={particlesInit} 
            loaded={particlesLoaded}
            options={
                {
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 3,
                            },
                            repulse: {
                                distance: 100,
                                duration: 0.5,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#fff",
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            directions: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 2, max: 4 },
                        },
                    },
                    detectRetina: true,
                }
            }
         />
    </>
  )
}

export default ParticleBg