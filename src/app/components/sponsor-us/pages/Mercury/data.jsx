import mercuryImage from '../../assets/images/planet-mercury.svg';
import mercuryInternalImage from '../../assets/images/planet-mercury-internal.svg';
import mercuryGeoImage from '../../assets/images/planet-mercury-geology.png';

export const data = {
  name: 'Grupo Thomas',
  overview: {
    content: '',
    source: 'https://en.wikipedia.org/wiki/Mercury_(planet)',
    image: mercuryImage,
  },
  structure: {
    content: '',
    source: 'https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure',
    image: mercuryInternalImage,
  },
  geology: {
    content: '',
    source: 'https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology',
    image: mercuryImage,
    geo: mercuryGeoImage,
  },
  sectionColor: 'hsl(194, 48%, 49%)',
  desktopImgWidth: '290px',
  tabletImgWidth: '184px',
  mobileImgWidth: '111px',
  rotation: '58.6 Days',
  revolution: '87.97 Days',
  radius: '2,439.7 KM',
  temperature: '430°c',
};
