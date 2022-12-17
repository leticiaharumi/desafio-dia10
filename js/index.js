window.onload = function() {
  Particles.init({
    selector: ".background",
    maxParticles: 200,
    sizeVariations: 3,
    speed: 0.8,
    color: ["#bdc3c7", "#ecf0f1"],
    minDistance: 100,
    connectParticles: true,

    // options for breakpoints
    responsive: [
      {
        breakpoint: 768,
        options: {
          maxParticles: 200,
          color: ["#bdc3c7", "#ecf0f1"],
          connectParticles: true,
        },
      },
      {
        breakpoint: 425,
        options: {
          maxParticles: 100,
          connectParticles: true,
        },
      },
      {
        breakpoint: 320,
        options: {
          maxParticles: 0,

          // disables particles.js
        },
      },
    ],
  });
}

function pause() {
  Particles.pauseAnimation();
}

function resume() {
  Particles.resumeAnimation();
}