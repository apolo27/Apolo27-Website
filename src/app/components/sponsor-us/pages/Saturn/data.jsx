import saturnImage from '../../assets/images/planet-saturn.svg';
import saturnInternalImage from '../../assets/images/planet-saturn-internal.svg';
import saturnGeoImage from '../../assets/images/planet-saturn-geology.png';

export const data = {
  name: 'Saturn',
  overview: {
    content: '',
    source: 'https://en.wikipedia.org/wiki/Saturn',
    image: saturnImage,
  },
  structure: {
    content: '',
    source: 'https://en.wikipedia.org/wiki/Saturn#Internal_structure',
    image: saturnInternalImage,
  },
  geology: {
    content: '',
    source: 'https://en.wikipedia.org/wiki/Saturn#Atmosphere',
    image: saturnImage,
    geo: saturnGeoImage,
  },
  sectionColor: 'hsl(17, 73%, 46%)',
  desktopImgWidth: '666px',
  tabletImgWidth: '422px',
  mobileImgWidth: '256px',
  rotation: '10.8 Hours',
  revolution: '29.46 Years',
  radius: '58,232 KM',
  temperature: '-138°c',
};
