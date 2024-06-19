import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import { RiMenuFold4Fill } from "react-icons/ri";
import GenreList from "./GenreList";

function DrawerGenreList() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button leftIcon={<RiMenuFold4Fill />} onClick={onOpen}>
        Genres
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose} size="full" placement="left">
        <DrawerContent>
          <DrawerCloseButton size="lg" />
          <DrawerBody>
            <GenreList />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerGenreList;
