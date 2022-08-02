import { useState, useRef, useEffect } from "react";
import {
  IconButton,
  Button,
  useDisclosure,
  Flex,
  UnorderedList,
  ListItem,
  Heading,
  Image,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { RepeatIcon } from "@chakra-ui/icons";

import "./BackgroundSelection.scss";

import BackgroundCubes from "../BackgroundOptions/BackgroundCubes/BackgroundCubes";
import BackgroundDiagonals from "../BackgroundOptions/BackgroundDiagonals/BackgroundDiagonals";
import BackgroundSquareCircles from "../BackgroundOptions/BackgroundSquareCircles/BackgroundSquareCircles";
import BackgroundGradientSquares from "../BackgroundOptions/BackgroundGradientSquares/BackgroundGradientSquares";
import BackgroundPS from "../BackgroundOptions/BackgroundPS/BackgroundPS";
import BackgroundGrid from "../BackgroundOptions/BackgroundGrid/BackgroundGrid";
import BackgroundLines from "../BackgroundOptions/BackgroundLines/BackgroundLines";
import BackgroundBubles from "../BackgroundOptions/BackgroundBubles/BackgroundBubles";

function BackgroundSelection() {
  const [currentBackground, setCurrentBackground] = useState("cubes");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const itemRefs = useRef([]);

  const backgroundNames = [
    "Cubes",
    "Diagonals",
    "Square and circles",
    "Gradient Squares",
    "PS",
    "Grid",
    "Lines",
    "Bubles",
  ];

  const backgroundValue = [
    "cubes",
    "diagonals",
    "squareCircles",
    "gradientSquares",
    "ps",
    "grid",
    "lines",
    "bubles",
  ];
  const pathBackgrounds = [
    "https://images.wallpaperscraft.ru/image/single/minimalizm_kub_yarkiy_fon_81333_1920x1080.jpg",
    "https://images.wallpaperscraft.ru/image/single/minimalizm_kub_yarkiy_fon_81333_1920x1080.jpg",
    "https://images.wallpaperscraft.ru/image/single/minimalizm_kub_yarkiy_fon_81333_1920x1080.jpg",
    "https://images.wallpaperscraft.ru/image/single/minimalizm_kub_yarkiy_fon_81333_1920x1080.jpg",
    "https://images.wallpaperscraft.ru/image/single/minimalizm_kub_yarkiy_fon_81333_1920x1080.jpg",
    "https://images.wallpaperscraft.ru/image/single/minimalizm_kub_yarkiy_fon_81333_1920x1080.jpg",
    "https://images.wallpaperscraft.ru/image/single/minimalizm_kub_yarkiy_fon_81333_1920x1080.jpg",
    "https://images.wallpaperscraft.ru/image/single/minimalizm_kub_yarkiy_fon_81333_1920x1080.jpg",
  ];

  const backgroundList = Array.from(Array(backgroundNames.length)).map(
    (item, i) => i
  );

  const chooseBackground = () => {
    switch (currentBackground) {
      case "cubes":
        return <BackgroundCubes />;
      case "diagonals":
        return <BackgroundDiagonals />;
      case "squareCircles":
        return <BackgroundSquareCircles />;
      case "gradientSquares":
        return <BackgroundGradientSquares />;
      case "ps":
        return <BackgroundPS />;
      case "grid":
        return <BackgroundGrid />;
      case "lines":
        return <BackgroundLines />;
      case "bubles":
        return <BackgroundBubles />;
      default:
        return <BackgroundCubes />;
    }
  };

  const focusOnItem = () => {
    // console.log(backgroundValue.indexOf(currentBackground));
    // console.log(currentBackground);
    // console.log(itemRefs.current);
    if (itemRefs.current.length > 0) {
      itemRefs.current.forEach((myRef) => myRef.classList.remove("active"));
      itemRefs.current[
        backgroundValue.indexOf(currentBackground)
      ].classList.add("active");
    }
  };

  useEffect(focusOnItem, [currentBackground]);

  return (
    <>
      <IconButton
        width="40px"
        height="40px"
        borderRadius="50%"
        icon={<RepeatIcon />}
        onClick={onOpen}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent background="#2D3748" color="white" maxWidth="600px">
          <ModalHeader>Select Background</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex flexDirection="column" gap="5px">
              {/* <Box
                cursor="pointer"
                width="180px"
                mb="20px"
                onClick={() => setCurrentBackground("cubes")}
              >
                <Image
                  borderRadius="10px"
                  width="180px"
                  mb="10px"
                  src="https://images.wallpaperscraft.ru/image/single/minimalizm_kub_yarkiy_fon_81333_1920x1080.jpg"
                ></Image>
                <Heading as="h4" size="sm" textAlign="center">
                  Default
                </Heading>
              </Box>

              <Heading as="h3" size="md" fontWeight="500">
                Animated background:
              </Heading> */}

              <UnorderedList
                display="flex"
                alignItems="baseline"
                flexWrap="wrap"
                gap="20px"
                styleType="none"
                margin="10px 0px 20px 0px"
              >
                {backgroundList.map((item, i) => (
                  <ListItem
                    flex="1 1 20%"
                    ref={(el) => (itemRefs.current[i] = el)}
                    key={Math.random().toString(36).substring(2, 9)}
                    className={i === 0 ? "active" : null}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    cursor="pointer"
                    textAlign="center"
                    gap="10px"
                    onClick={() => {
                      setCurrentBackground(backgroundValue[i]);
                      focusOnItem(backgroundValue[i]);
                    }}
                  >
                    <Image
                      className="background__item-image"
                      borderRadius="10px"
                      width="100%"
                      src={pathBackgrounds[i]}
                    ></Image>
                    <h3>{backgroundNames[i]}</h3>
                  </ListItem>
                ))}
              </UnorderedList>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {chooseBackground()}
    </>
  );
}

export default BackgroundSelection;