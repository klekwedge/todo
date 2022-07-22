import "./BackgroundSelection.scss";
import { useState } from "react";
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
} from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import BackgroundCubes from "../BackgroundOptions/BackgroundCubes/BackgroundCubes";
import BackgroundDiagonals from "../BackgroundOptions/BackgroundDiagonals/BackgroundDiagonals";
import BackgroundSquareCircles from "../BackgroundOptions/BackgroundSquareCircles/BackgroundSquareCircles";
// import BackgroundLines from "../BackgroundOptions/BackgroundLines/BackgroundLines";

function BackgroundSelection() {
  const [currentBackground, setCurrentBackground] = useState("white");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const chooseBackground = () => {
    switch (currentBackground) {
      case "cubes":
        return <BackgroundCubes />;
      case "diagonals":
        return <BackgroundDiagonals />;
      case "squareCircles":
        return <BackgroundSquareCircles />;
      // case "lines":
      //   return <BackgroundLines />;
      default:
        return null;
    }
  };

  return (
    <>
      <IconButton
        size="lg"
        borderRadius="50%"
        position="absolute"
        top="100px"
        right="25px"
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
              <Box
                cursor="pointer"
                width="180px"
                mb="20px"
                onClick={() => setCurrentBackground("white")}
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
              </Heading>

              <UnorderedList
                display="flex"
                gap="20px"
                styleType="none"
                margin="10px 0px 0px 0px"
              >
                <ListItem
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  cursor="pointer"
                  textAlign="center"
                  gap="10px"
                  onClick={() => setCurrentBackground("cubes")}
                >
                  <Image
                    borderRadius="10px"
                    width="200px"
                    src="https://images.wallpaperscraft.ru/image/single/minimalizm_kub_yarkiy_fon_81333_1920x1080.jpg"
                  ></Image>
                  <h3>Cubes</h3>
                </ListItem>

                <ListItem
                  display="flex"
                  alignItems="center"
                  cursor="pointer"
                  flexDirection="column"
                  gap="10px"
                  textAlign="center"
                  onClick={() => setCurrentBackground("diagonals")}
                >
                  <Image
                    borderRadius="10px"
                    width="200px"
                    src="https://images.wallpaperscraft.ru/image/single/minimalizm_kub_yarkiy_fon_81333_1920x1080.jpg"
                  ></Image>
                  <h3>Diagonals</h3>
                </ListItem>

                <ListItem
                  display="flex"
                  alignItems="center"
                  cursor="pointer"
                  flexDirection="column"
                  gap="10px"
                  textAlign="center"
                  onClick={() => setCurrentBackground("squareCircles")}
                >
                  <Image
                    borderRadius="10px"
                    width="200px"
                    src="https://images.wallpaperscraft.ru/image/single/minimalizm_kub_yarkiy_fon_81333_1920x1080.jpg"
                  ></Image>
                  <h3>Square and circles </h3>
                </ListItem>

                {/* <ListItem
                  display="flex"
                  alignItems="center"
                  cursor="pointer"
                  flexDirection="column"
                  gap="10px"
                  textAlign="center"
                  onClick={() => setCurrentBackground("lines")}
                >
                  <Image
                    borderRadius="10px"
                    width="200px"
                    src="https://images.wallpaperscraft.ru/image/single/minimalizm_kub_yarkiy_fon_81333_1920x1080.jpg"
                  ></Image>
                  <h3>Lines </h3>
                </ListItem> */}
              </UnorderedList>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Save
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {chooseBackground()}
    </>
  );
}

export default BackgroundSelection;
