import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Tabs, TabList, TabPanels, Tab, TabPanel, Checkbox, Box, Flex, Link, VStack, SimpleGrid, } from "@chakra-ui/react";

function FilterModal({ isOpen, onClose, selectedCameras, setSelectedCameras, selectedEvents, setSelectedEvents, onApply, selectedStatus, setSelectedStatus }) {
    const maxSelections = 4;  // Max limit for selected checkboxes

    const eventOptions = [
        "Motion Detection", "Human Detection", "Face Detection", "Line Crossing", "Region Enter",
        "Region Exit", "Intrude", "Un-Attended", "Object Remove"
    ];

    const statusOptions = [
        "Active", "Inactive", "Pending", "Suspended", "Deleted"
    ];

    const cameraOptions = [
        "Entry Gate No 11", "Entry Gate No 12", "Entry Gate No 13", "Entry Gate No 14",
        "Entry Gate No 15", "Entry Gate No 16", "Entry Gate No 17", "Entry Gate No 18",
        "Entry Gate No 19", "Entry Gate No 20", "Entry Gate No 21", "Entry Gate No 22",
        "Entry Gate No 23", "Entry Gate No 24"
    ];

    const handleEventChange = (event) => {
        const eventName = event.target.value;
        if (selectedEvents.includes(eventName)) {
            setSelectedEvents(selectedEvents.filter((e) => e !== eventName));
        } else if (selectedEvents.length < maxSelections) {
            setSelectedEvents([...selectedEvents, eventName]);
        }
    };

    const handleStatusChange = (status) => {
        const statusName = status.target.value;
        if (selectedStatus.includes(statusName)) {
            setSelectedStatus(selectedStatus.filter((s) => s !== statusName));
        } else if (selectedStatus.length < maxSelections) {
            setSelectedStatus([...selectedStatus, statusName]);
        }
    };

    const handleCameraChange = (camera) => {
        const cameraName = camera.target.value;
        if (selectedCameras.includes(cameraName)) {
            setSelectedCameras(selectedCameras.filter((c) => c !== cameraName));
        } else if (selectedCameras.length < maxSelections) {
            setSelectedCameras([...selectedCameras, cameraName]);
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} >
            <ModalOverlay />
            <ModalContent width="601px" height="625px" maxW={'auto'} marginTop="178px">
                <ModalHeader textAlign="center">Filters</ModalHeader>
                <ModalBody>
                    <Tabs>
                        <TabList borderColor={"light.secondary_text"}>
                            <Tab _selected={{ borderBottomColor: "light.primary", borderWidth: "2px", fontWeight: "bold" }}>Cameras</Tab>
                            <Tab _selected={{ borderBottomColor: "light.primary", borderWidth: "2px", fontWeight: "bold" }}>Event Type</Tab>
                            <Tab _selected={{ borderBottomColor: "light.primary", borderWidth: "2px", fontWeight: "bold" }}>Status</Tab>
                        </TabList>


                        <TabPanels>
                            {/* Cameras Panel */}
                            <TabPanel>
                                <Box>
                                    <Flex justifyContent="space-between" marginBottom="28px" marginTop="17px">
                                        Total Camera ({cameraOptions.length})
                                        <Flex gap={4}>
                                            <Link color="#9234EA" fontSize="14px" fontWeight="semibold">
                                                Max 4
                                            </Link>
                                            <Link color="#9234EA" fontSize="14px" fontWeight="semibold" onClick={() => setSelectedCameras([])} opacity={(selectedCameras.length === 0) ? "0.5" : "1"} textDecoration={"none"} pointerEvents={(selectedCameras.length === 0) ? "none" : "auto"} >
                                                Deselect All
                                            </Link>
                                        </Flex>
                                    </Flex>
                                    <VStack align="start">
                                        <SimpleGrid columns={3} gap="30px" paddingX={4} height="350px" overflowY="scroll" css={{
                                            '&::-webkit-scrollbar': {
                                                width: '5px',
                                            },
                                            '&::-webkit-scrollbar-track': {
                                                background: 'white',
                                            },
                                            '&::-webkit-scrollbar-thumb': {
                                                backgroundColor: '#E9D8FD',
                                                borderRadius: '20px',
                                            },
                                            '&::-webkit-scrollbar-thumb:hover': {
                                                backgroundColor: '#D6BCFA',
                                            },
                                        }}>
                                            {cameraOptions.map((camera) => (
                                                <Checkbox width="145px"
                                                    key={camera}
                                                    value={camera}
                                                    isChecked={selectedCameras.includes(camera)}
                                                    onChange={handleCameraChange}
                                                    isDisabled={!selectedCameras.includes(camera) && selectedCameras.length >= maxSelections}
                                                >
                                                    {camera}
                                                </Checkbox>
                                            ))}
                                        </SimpleGrid>
                                    </VStack>
                                </Box>
                            </TabPanel>

                            {/* Event Type Panel */}
                            <TabPanel>
                                <Flex justifyContent="space-between" marginBottom="28px" marginTop="17px">
                                    Select Event Type
                                    <Flex gap={4} >
                                        <Link color="#9234EA" fontSize="14px" fontWeight="semibold" display={(selectedEvents.length === maxSelections) ? "auto" : "none"} >
                                            Max {maxSelections}
                                        </Link>
                                        <Link color="#9234EA" h={0} background={"transparent"} fontSize="14px" fontWeight="semibold" onClick={() => setSelectedEvents([])} opacity={(selectedEvents.length === 0) ? "0.5" : "1"} textDecoration={"none"} pointerEvents={(selectedEvents.length === 0) ? "none" : "auto"} >
                                            Deselect All
                                        </Link>
                                    </Flex>
                                </Flex>
                                <Box>
                                    <VStack align="start">
                                        <Flex
                                            wrap="wrap"
                                            gap="30px"
                                            paddingX={4}
                                            height="350px"
                                            overflowY="scroll"
                                            css={{
                                                '&::-webkit-scrollbar': {
                                                    width: '5px',
                                                },
                                                '&::-webkit-scrollbar-track': {
                                                    background: 'white',
                                                },
                                                '&::-webkit-scrollbar-thumb': {
                                                    backgroundColor: '#E9D8FD',
                                                    borderRadius: '20px',
                                                },
                                                '&::-webkit-scrollbar-thumb:hover': {
                                                    backgroundColor: '#D6BCFA',
                                                },
                                            }}
                                        >
                                            {eventOptions.map((event) => (
                                                <Checkbox width="145px"
                                                    key={event}
                                                    value={event}
                                                    isChecked={selectedEvents.includes(event)}
                                                    onChange={handleEventChange}
                                                    isDisabled={!selectedEvents.includes(event) && selectedEvents.length >= maxSelections}
                                                >
                                                    {event}
                                                </Checkbox>
                                            ))}
                                        </Flex>
                                    </VStack>

                                </Box>
                            </TabPanel>

                            {/* Status Type Panel */}
                            <TabPanel>
                                <Flex justifyContent="space-between" marginBottom="28px" marginTop="17px">
                                    Select Status Type
                                    <Flex gap={4}>
                                        <Link color="#9234EA" fontSize="14px" fontWeight="semibold">
                                            Max 3
                                        </Link>
                                        <Link color="#9234EA" fontSize="14px" fontWeight="semibold" onClick={() => setSelectedStatus([])}>
                                            Deselect All
                                        </Link>
                                    </Flex>
                                </Flex>
                                <Box>
                                    <VStack align="start">
                                        <SimpleGrid columns={3} gap="30px" paddingX={4} height="350px" overflowY="scroll" css={{
                                            '&::-webkit-scrollbar': {
                                                width: '5px',
                                            },
                                            '&::-webkit-scrollbar-track': {
                                                background: 'white',
                                            },
                                            '&::-webkit-scrollbar-thumb': {
                                                backgroundColor: '#E9D8FD',
                                                borderRadius: '20px',
                                            },
                                            '&::-webkit-scrollbar-thumb:hover': {
                                                backgroundColor: '#D6BCFA',
                                            },
                                        }}>
                                            {statusOptions.map((event) => (
                                                <Checkbox width="145px"
                                                    key={event}
                                                    value={event}
                                                    isChecked={selectedStatus.includes(event)}
                                                    onChange={handleStatusChange}
                                                    isDisabled={!selectedStatus.includes(event) && selectedStatus.length >= maxSelections}
                                                >
                                                    {event}
                                                </Checkbox>
                                            ))}
                                        </SimpleGrid>
                                    </VStack>
                                </Box>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </ModalBody>

                <ModalFooter height="50px" borderTop="2px solid black" padding="15px" justifyContent="center">
                    <Button color="red" border="1px solid red" mr={3} onClick={onClose} width="144px" backgroundColor="transparent">
                        Cancel
                    </Button>
                    {/* Call onApply when the "Apply Filter" button is clicked */}
                    <Button colorScheme="purple" onClick={() => onApply(selectedCameras, selectedEvents, selectedStatus)} width="144px">
                        Apply Filter
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default FilterModal;