import { Info, Item, Heading, Desc } from "./InfoStyles";

const InfoContainer = ({ planetData }) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 1.5, duration: 1.5 },
    },
    exit: {
      opacity: 0,
      y: 25,
      transition: { duration: 1 },
    },
  };

  return (
    <Info
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Item>
        <Heading>Tiempo como sponsors</Heading>
        <Desc>{planetData.rotation}</Desc>
      </Item>
      <Item>
        <Heading>Tipo de Sponsors</Heading>
        <Desc>{planetData.revolution}</Desc>
      </Item>
      <Item>
        <Heading>Fondos aportados</Heading>
        <Desc>{planetData.radius}</Desc>
      </Item>
      <Item>
        <Heading>Vacio</Heading>
        <Desc>{planetData.temperature}</Desc>
      </Item>
    </Info>
  );
};

export default InfoContainer;
