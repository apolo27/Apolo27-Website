import neptuneImage from '../../assets/images/planet-neptune.svg';
import neptuneInternalImage from '../../assets/images/planet-neptune-internal.svg';
import neptuneGeoImage from '../../assets/images/planet-neptune-geology.png';

export const data = {
  name: 'Neptune',
  overview: {
    content: '',
    source: 'https://en.wikipedia.org/wiki/Neptune',
    image: neptuneImage,
  },
  structure: {
    content: '',
    source: 'https://en.wikipedia.org/wiki/Neptune#Internal_structure',
    image: neptuneInternalImage,
  },
  geology: {
    content: '',
    source: 'https://en.wikipedia.org/wiki/Neptune#Atmosphere',
    image: neptuneImage,
    geo: neptuneGeoImage,
  },
  sectionColor: 'hsl(222, 87%, 56%)',
  desktopImgWidth: '450px',
  tabletImgWidth: '285px',
  mobileImgWidth: '173px',
  rotation: '16.08 Hours',
  revolution: '164.79 Years',
  radius: '24,622 KM',
  temperature: '-201°c',
};
