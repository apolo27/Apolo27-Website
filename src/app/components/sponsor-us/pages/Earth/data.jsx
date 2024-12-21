import earthImage from '../../assets/images/planet-earth.svg';
import earthInternalImage from '../../assets/images/planet-earth-internal.svg';
import earthGeoImage from '../../assets/images/planet-earth-geology.png';

export const data = {
  name: 'Earth',
  overview: {
    /* content: '',
    source: 'https://en.wikipedia.org/wiki/Earth',
    image: earthImage,*/
  },
  structure: {
    /*  content:
    source:,
    image: earthInternalImage,*/
  },
  geology: {
    content: '',
    source: 'https://en.wikipedia.org/wiki/Earth#Surface',
    image: earthImage,
    geo: earthGeoImage,
  },
  sectionColor: 'hsl(263, 67%, 51%)',
  desktopImgWidth: '450px',
  tabletImgWidth: '285px',
  mobileImgWidth: '173px',
  rotation: '0.99 Days',
  revolution: '365.26 Days',
  radius: '6,371 KM',
  temperature: '16°c',
};
