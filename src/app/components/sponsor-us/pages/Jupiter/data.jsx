import jupiterImage from '../../assets/images/planet-jupiter.svg';
import jupiterInternalImage from '../../assets/images/planet-jupiter-internal.svg';
import jupiterGeoImage from '../../assets/images/planet-jupiter-geology.png';

export const data = {
  name: 'Jupiter',
  overview: {
    content: '',
    source: 'https://en.wikipedia.org/wiki/Jupiter',
    image: jupiterImage,
  },
  structure: {
    content: '',
    source: 'https://en.wikipedia.org/wiki/Jupiter#Internal_structure',
    image: jupiterInternalImage,
  },
  geology: {
    content: '',
    source:
      'https://en.wikipedia.org/wiki/Jupiter#Great_Red_Spot_and_other_vortices',
    image: jupiterImage,
    geo: jupiterGeoImage,
  },
  sectionColor: 'hsl(2, 68%, 53%)',
  desktopImgWidth: '582px',
  tabletImgWidth: '369px',
  mobileImgWidth: '224px',
  rotation: '9.93 Hours',
  revolution: '11.86 Years',
  radius: '69,911 KM',
  temperature: '-108°c',
};
