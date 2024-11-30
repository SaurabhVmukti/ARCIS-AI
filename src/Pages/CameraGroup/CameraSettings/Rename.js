import React, { useState } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Input,
    FormControl,
    FormLabel,
    Divider,
} from "@chakra-ui/react";

const RenameModal = ({ isOpen, onClose }) => {
    const [deviceName, setDeviceName] = useState("");

    const handleRename = (e) => {
        e.preventDefault();
        console.log(`Device renamed to: ${deviceName}`);
        onClose(); // Close the modal after renaming
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay bg="rgba(0, 0, 0, 0.5)" />
            <ModalContent
                bg="white"
                minWidth="550px"
                p="1px" // Increased top and bottom padding
                borderRadius="12px"
                // width="450px"
                boxShadow="0 2px 15px rgba(0, 0, 0, 0.2)"
                display="flex"
                flexDirection="column"
                alignItems="center"
            >
                <ModalHeader
                    fontSize="22px"
                    fontWeight="bold"
                    color="#333"
                    textAlign="center"
                    mb="0px"
                >
                    Rename Device
                </ModalHeader>
                <ModalBody>
                    <form onSubmit={handleRename} style={{ width: "100%" }}>
                        <FormControl>
                            <FormLabel
                                fontSize="16px"
                                fontWeight="bold"
                                color="black"
                                mb="8px"
                                htmlFor="deviceName"
                            >
                                Enter camera new name:
                            </FormLabel>
                            <Input
                                type="text"
                                id="deviceName"
                                value={deviceName}
                                onChange={(e) => setDeviceName(e.target.value)}
                                placeholder="XYZ"
                                required
                                p="12px"
                                fontSize="16px"
                                border="1px solid #ccc"
                                borderRadius="8px"
                                width="100%"
                                maxWidth="400px"
                                textAlign="start"
                                mb="50px"
                            />
                        </FormControl>
                        <Divider
                            width="calc(100% + 186px)"
                            border="1px solid black"
                            mb="0px"
                            ml="-94px"
                        />
                        <ModalFooter
                            display="flex"
                            justifyContent="center"
                            gap="20px"
                            width="100%"
                            maxWidth="400px"
                        >
                            <Button
                                bg="white"
                                color="#ff4d4f"
                                border="2px solid #ff9c9e"
                                p="8px 50px"
                                borderRadius="8px"
                                cursor="pointer"
                                fontSize="16px"
                                fontWeight="bold"
                                _hover={{ bg: "#fac9c9" }}
                                onClick={onClose}
                            >
                                Cancel
                            </Button>
                            <Button
                                bg="#8e44ad"
                                color="white"
                                border="none"
                                p="8px 50px"
                                borderRadius="8px"
                                cursor="pointer"
                                fontSize="16px"
                                fontWeight="bold"
                                _hover={{ bg: "#a569bd" }}
                                type="submit"
                            >
                                Save
                            </Button>
                        </ModalFooter>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default RenameModal;
