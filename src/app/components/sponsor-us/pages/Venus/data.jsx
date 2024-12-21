import venusImage from '../../assets/images/planet-venus.svg';
import venusInternalImage from '../../assets/images/planet-venus-internal.svg';
import venusGeoImage from '../../assets/images/planet-venus-geology.png';

export const data = {
  name: 'Venus',
  overview: {
    content: '',
    source: 'https://en.wikipedia.org/wiki/Venus',
    image: venusImage,
  },
  structure: {
    content: '',
    source: 'https://en.wikipedia.org/wiki/Venus#Internal_structure',
    image: venusInternalImage,
  },
  geology: {
    content: '',
    source: 'https://en.wikipedia.org/wiki/Venus#Surface_geology',
    image: venusImage,
    geo: venusGeoImage,
  },
  sectionColor: 'hsl(33, 82%, 61%)',
  desktopImgWidth: '400px',
  tabletImgWidth: '253px',
  mobileImgWidth: '154px',
  rotation: '243 Days',
  revolution: '224.7 Days',
  radius: '6,051.8 KM',
  temperature: '471°c',
};
