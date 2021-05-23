import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { useDisclosure } from "@chakra-ui/hooks";
import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { useQuiz } from "../../Contexts/quizContext";

export function HomePageModal({
  setShowModal,
}: {
  setShowModal: (value: any) => void;
}) {
  const { isOpen, onClose } = useDisclosure({ isOpen: true });
  const { dispatch } = useQuiz();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Hey ! Please enter your Name</ModalHeader>

        <ModalBody>
          <Input
            placeholder="Name"
            onChange={(e) =>
              dispatch({ type: "SET_NAME", payload: e.target.value })
            }
          />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={() => setShowModal(false)}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
