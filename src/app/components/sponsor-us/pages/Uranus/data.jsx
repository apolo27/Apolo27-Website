import uranusImage from '../../assets/images/planet-uranus.svg';
import uranusInternalImage from '../../assets/images/planet-uranus-internal.svg';
import uranusGeoImage from '../../assets/images/planet-uranus-geology.png';

export const data = {
  name: 'Uranus',
  overview: {
    content: '',
    source: 'https://en.wikipedia.org/wiki/Uranus',
    image: uranusImage,
  },
  structure: {
    content: '',
    source: 'https://en.wikipedia.org/wiki/Uranus#Internal_structure',
    image: uranusInternalImage,
  },
  geology: {
    content: '',
    source: 'https://en.wikipedia.org/wiki/Uranus#Atmosphere',
    image: uranusImage,
    geo: uranusGeoImage,
  },
  sectionColor: 'hsl(169, 73%, 44%)',
  desktopImgWidth: '458px',
  tabletImgWidth: '290px',
  mobileImgWidth: '176px',
  rotation: '17.2 Hours',
  revolution: '84 Years',
  radius: '25,362 KM',
  temperature: '-195°c',
};
