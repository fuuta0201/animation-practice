import Particles from "particlesjs";

export const particle = () => {
  Particles.init({
    selector: '.js-particle',
    sizeVariations: 10,
    color: ['#00bbdd', '#404B69', '#DBEDF3'],
    connectParticles: true
  });
}