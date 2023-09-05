import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ActionIcon, Box, Flex, Image, Modal, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { BsArrowRepeat } from 'react-icons/bs';

import BackgroundCubes from '../BackgroundOptions/BackgroundCubes/BackgroundCubes';
import BackgroundDiagonals from '../BackgroundOptions/BackgroundDiagonals/BackgroundDiagonals';
import BackgroundSquareCircles from '../BackgroundOptions/BackgroundSquareCircles/BackgroundSquareCircles';
import BackgroundGradientSquares from '../BackgroundOptions/BackgroundGradientSquares/BackgroundGradientSquares';
import BackgroundPS from '../BackgroundOptions/BackgroundPS/BackgroundPS';
import BackgroundGrid from '../BackgroundOptions/BackgroundGrid/BackgroundGrid';
import BackgroundLines from '../BackgroundOptions/BackgroundLines/BackgroundLines';
import BackgroundBubles from '../BackgroundOptions/BackgroundBubles/BackgroundBubles';

import './BackgroundSelection.scss';

function BackgroundSelection() {
  const [currentBackground, setCurrentBackground] = useState('');
  const [opened, { open, close }] = useDisclosure(false);

  const backgroundNames = [
    'Cubes',
    'Diagonals',
    'Square and circles',
    'Gradient Squares',
    'PS',
    'Grid',
    'Lines',
    'Bubles',
  ];

  const backgroundValue = ['cubes', 'diagonals', 'squareCircles', 'gradientSquares', 'ps', 'grid', 'lines', 'bubles'];
  const pathBackgrounds = [
    'https://images.wallpaperscraft.ru/image/single/minimalizm_kub_yarkiy_fon_81333_1920x1080.jpg',
    'https://images.wallpaperscraft.ru/image/single/minimalizm_kub_yarkiy_fon_81333_1920x1080.jpg',
    'https://images.wallpaperscraft.ru/image/single/minimalizm_kub_yarkiy_fon_81333_1920x1080.jpg',
    'https://images.wallpaperscraft.ru/image/single/minimalizm_kub_yarkiy_fon_81333_1920x1080.jpg',
    'https://images.wallpaperscraft.ru/image/single/minimalizm_kub_yarkiy_fon_81333_1920x1080.jpg',
    'https://images.wallpaperscraft.ru/image/single/minimalizm_kub_yarkiy_fon_81333_1920x1080.jpg',
    'https://images.wallpaperscraft.ru/image/single/minimalizm_kub_yarkiy_fon_81333_1920x1080.jpg',
    'https://images.wallpaperscraft.ru/image/single/minimalizm_kub_yarkiy_fon_81333_1920x1080.jpg',
  ];

  const backgroundList = Array.from(Array(backgroundNames.length)).map((item, i) => i);

  const chooseBackground = () => {
    switch (currentBackground) {
      case 'cubes':
        return <BackgroundCubes />;
      case 'diagonals':
        return <BackgroundDiagonals />;
      case 'squareCircles':
        return <BackgroundSquareCircles />;
      case 'gradientSquares':
        return <BackgroundGradientSquares />;
      case 'ps':
        return <BackgroundPS />;
      case 'grid':
        return <BackgroundGrid />;
      case 'lines':
        return <BackgroundLines />;
      case 'bubles':
        return <BackgroundBubles />;
      default:
        return null;
    }
  };

  return (
    <>
      <ActionIcon w="40px" h="40px" radius="50%" onClick={open}>
        <BsArrowRepeat />
      </ActionIcon>
      <Modal opened={opened} onClose={close} title="Select Background">
        <Flex direction="column" gap="5px">
          <Box w="180px" mb="20px" onClick={() => setCurrentBackground('')}>
            <Image
              radius="10px"
              w="180px"
              mb="10px"
              src="https://images.wallpaperscraft.ru/image/single/minimalizm_kub_yarkiy_fon_81333_1920x1080.jpg"
            />
            <Title order={4} size="sm" align="center">
              Default
            </Title>
          </Box>

          <Title order={3} size="md" fw="500">
            Animated background:
          </Title>

          <Flex wrap="wrap" gap="20px" m="10px 0px 20px 0px">
            {backgroundList.map((item, i) => (
              <Flex
                style={{ flex: '1 1 45%' }}
                key={uuidv4()}
                className={backgroundValue[i] === currentBackground ? 'active' : ''}
                display="flex"
                direction="column"
                align="center"
                gap="10px"
                onClick={() => setCurrentBackground(backgroundValue[i])}
              >
                <Image className="background__item-image" radius="10px" w="100%" src={pathBackgrounds[i]} />
                <h3>{backgroundNames[i]}</h3>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Modal>
      {chooseBackground()}
    </>
  );
}

export default BackgroundSelection;
