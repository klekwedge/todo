import "./BackgroundSelection.scss";
import { useState } from "react";
import {
  IconButton,
  Button,
  useDisclosure,
  Flex,
  UnorderedList,
  ListItem,
  ListIcon,
  Image,
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

function BackgroundSelection() {
  const [currentBackground, setCurrentBackground] = useState("white");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const chooseBackground = () => {
    switch (currentBackground) {
      case "cubes":
        return <BackgroundCubes />;
      case "diagonals":
        return <BackgroundDiagonals />;
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
        className="background-select"
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
              <h2>Animated background:</h2>

              <UnorderedList
                display="flex"
                gap="20px"
                styleType="none"
                margin="10px 0px 0px 0px"
              >
                <ListItem
                  display="flex"
                  alignItems="center"
                  cursor="pointer"
                  flexDirection="column"
                  gap="10px"
                  onClick={() => setCurrentBackground("")}
                >
                  <Image
                    borderRadius="10px"
                    width="200px"
                    src="https://images.wallpaperscraft.ru/image/single/minimalizm_kub_yarkiy_fon_81333_1920x1080.jpg"
                  ></Image>
                  <h3>Default</h3>
                </ListItem>

                <ListItem
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  cursor="pointer"
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
                  onClick={() => setCurrentBackground("diagonals")}
                >
                  <Image
                    borderRadius="10px"
                    width="200px"
                    src="https://images.wallpaperscraft.ru/image/single/minimalizm_kub_yarkiy_fon_81333_1920x1080.jpg"
                  ></Image>
                  <h3>Diagonals</h3>
                </ListItem>
              </UnorderedList>

              {/* <Image > </Image> */}
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
