import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    FormControl,
    FormLabel,
    Select,
    Switch,
    Button,
    Box,
    Text,
    Divider,
    ModalFooter,
    SimpleGrid,
    Flex,
    //useTab,
} from "@chakra-ui/react";
import Ellipse from "../../../Assets/Images/Camera-Group/Camera-Setting/Ellipse 33.svg";
import Group from "../../../Assets/Images/Camera-Group/Camera-Setting/Group 1000006028 (1).svg";
import CopyImage from "../../../Assets/Images/Camera-Group/Camera-Setting/copy.svg";
import OpComponent from "../../../Assets/Images/Camera-Group/Camera-Setting/Op component 2.svg";
import Frame from "../../../Assets/Images/Camera-Group/Camera-Setting/Frame.svg";

const CameraSetting = ({ isOpen, onClose }) => {
    // Track the active tab index with state
    const [selectedTab, setSelectedTab] = React.useState(0);

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
            <ModalOverlay />
            <ModalContent >
                <ModalHeader textAlign="center" fontWeight="bold" fontSize="lg">
                    Camera Settings
                </ModalHeader>

                <ModalBody>
                    <Box minHeight="600px">
                        <Tabs
                            variant="unstyled"
                            onChange={(index) => setSelectedTab(index)} // Track tab change
                        >
                            <TabList justifyContent="space-around" width="100%">
                                <Tab
                                    _selected={{
                                        color: "purple.500",
                                        borderBottom: "4px solid #a020f0",
                                    }}
                                    color="gray.500"
                                    fontWeight="bold"
                                >
                                    General
                                </Tab>
                                <Tab
                                    _selected={{
                                        color: "purple.500",
                                        borderBottom: "4px solid #a020f0",
                                    }}
                                    color="gray.500"
                                    fontWeight="bold"
                                >
                                    Media
                                </Tab>
                                <Tab
                                    _selected={{
                                        color: "purple.500",
                                        borderBottom: "4px solid #a020f0",
                                    }}
                                    color="gray.500"
                                    fontWeight="bold"
                                >
                                    AI Settings
                                </Tab>
                                <Tab
                                    _selected={{
                                        color: "purple.500",
                                        borderBottom: "4px solid #a020f0",
                                    }}
                                    color="gray.500"
                                    fontWeight="bold"
                                >
                                    Network
                                </Tab>
                                <Tab
                                    _selected={{
                                        color: "purple.500",
                                        borderBottom: "4px solid #a020f0",
                                    }}
                                    color="gray.500"
                                    fontWeight="bold"
                                >
                                    System
                                </Tab>
                            </TabList>

                            {/* Divider below the tabs */}
                            <Divider
                                orientation="horizontal"
                                borderColor="gray.300"
                                borderWidth="1px"
                                mt={0}
                                width="100%"
                            />

                            {/* Conditional rendering: Only show on the 'General' tab */}
                            {selectedTab === 0 && (
                                <Flex align="center" justifyContent="end" gap={2} p={2}>
                                    <img src={Ellipse} />

                                    <Text fontSize="sm" color="gray.600">
                                        Disconnected
                                    </Text>

                                    {/* Replace Wi-Fi Off Icon with SVG */}
                                    <img src={Group} />
                                    {/* </svg> */}
                                </Flex>
                            )}
                            <TabPanels>
                                <TabPanel>
                                    <Flex
                                        justifyContent="center"
                                        alignItems="center"
                                        gap={10}
                                        mb={4}
                                        width="100%" // Ensures full width usage
                                    >
                                        {/* Camera Name */}
                                        <FormControl
                                            display="flex"
                                            flexDirection="column"
                                            alignItems="center"
                                        >
                                            <FormLabel
                                                display="flex"
                                                alignItems="center"
                                                fontWeight="bold"
                                            >
                                                Camera name
                                                <img
                                                    src={OpComponent}
                                                    style={{ marginLeft: "8px" }}
                                                    alt="Icon"
                                                    height={19}
                                                    width={19}
                                                />
                                            </FormLabel>
                                            <Text>Basement Gate No. 11</Text>
                                        </FormControl>

                                        {/* Camera Model */}
                                        <FormControl
                                            display="flex"
                                            flexDirection="column"
                                            alignItems="center"
                                        >
                                            <FormLabel fontWeight="bold">Camera model</FormLabel>
                                            <Text>S-Series</Text>
                                        </FormControl>

                                        {/* Serial Number */}
                                        <FormControl
                                            display="flex"
                                            flexDirection="column"
                                            alignItems="center"
                                        >
                                            <FormLabel
                                                display="flex"
                                                alignItems="center"
                                                fontWeight="bold"
                                            >
                                                Serial Number
                                                <img
                                                    src={CopyImage}
                                                    style={{ marginLeft: "8px" }}
                                                    alt="Icon"
                                                    height={19}
                                                    width={19}
                                                />
                                            </FormLabel>
                                            <Text>DDDJ-55555-55554</Text>
                                        </FormControl>

                                        {/* Firmware */}
                                        <FormControl
                                            display="flex"
                                            flexDirection="column"
                                            alignItems="center"
                                        >
                                            <FormLabel fontWeight="bold">Firmware</FormLabel>
                                            <Text>V12.98630</Text>
                                        </FormControl>
                                    </Flex>
                                    <SimpleGrid columns={2} spacing={6}>
                                        <Box>
                                            <FormControl mb={4} mt={4}>
                                                <FormLabel>Screen and Sound</FormLabel>
                                                <Box display="flex" alignItems="center">
                                                    <Select
                                                        defaultValue="uninterrupted"
                                                        border="2px solid black"
                                                        borderRadius="4px" // Optional: Adjust border-radius for aesthetics
                                                        _focus={{
                                                            borderColor: "black",
                                                            boxShadow: "none", // Removes Chakra's default blue focus shadow
                                                        }}
                                                        _hover={{
                                                            borderColor: "black", // Keeps the border black on hover
                                                        }}
                                                    >
                                                        <option value="uninterrupted">
                                                            Uninterrupted recording
                                                        </option>
                                                        <option value="sound only">Sound only</option>
                                                    </Select>

                                                    <img
                                                        src={Frame}
                                                        height={19}
                                                        width={19}
                                                        style={{ marginLeft: "8px" }}
                                                        alt="Icon"
                                                    />
                                                </Box>
                                            </FormControl>

                                            <FormControl mb={4}>
                                                <FormLabel>Storage Setting</FormLabel>
                                                <Select
                                                    defaultValue="cloud"
                                                    border="2px solid black"
                                                    borderRadius="4px" // Optional: Adjust for rounded corners
                                                    _focus={{
                                                        borderColor: "black",
                                                        boxShadow: "none", // Remove Chakra's default blue shadow
                                                    }}
                                                    _hover={{
                                                        borderColor: "black", // Maintain black border on hover
                                                    }}
                                                >
                                                    <option value="cloud">Auto save to cloud</option>
                                                    <option value="local">Save to local storage</option>
                                                </Select>
                                            </FormControl>
                                        </Box>

                                        <Box ml="auto" width="100%" maxWidth="200px">
                                            <FormControl
                                                display="flex"
                                                alignItems="center"
                                                justifyContent="space-between"
                                                mb={8}
                                                mt={6}
                                            >
                                                <FormLabel mb="0">AI Notifications</FormLabel>
                                                <Switch
                                                    id="ai-notifications"
                                                    sx={{
                                                        "& .chakra-switch__track[data-checked]": {
                                                            backgroundColor: "#8acfa2",
                                                        },
                                                    }}
                                                />
                                            </FormControl>

                                            <FormControl
                                                display="flex"
                                                alignItems="center"
                                                justifyContent="space-between"
                                                mb={8}
                                            >
                                                <FormLabel mb="0">Push Notifications</FormLabel>
                                                <Switch
                                                    id="push-notifications"
                                                    defaultChecked
                                                    sx={{
                                                        "& .chakra-switch__track[data-checked]": {
                                                            backgroundColor: "#8acfa2",
                                                        },
                                                    }}
                                                />
                                            </FormControl>
                                            <FormControl
                                                display="flex"
                                                alignItems="center"
                                                justifyContent="space-between"
                                                mb={8}
                                            >
                                                <FormLabel mb="0">PTZ Control</FormLabel>
                                                <Switch
                                                    id="ptz-control"
                                                    sx={{
                                                        "& .chakra-switch__track[data-checked]": {
                                                            backgroundColor: "#8acfa2",
                                                        },
                                                    }}
                                                />
                                            </FormControl>
                                        </Box>
                                    </SimpleGrid>
                                </TabPanel>

                                <TabPanel>
                                    <Text>Media Settings Content...</Text>
                                </TabPanel>
                                <TabPanel>
                                    <Text>AI Settings Content...</Text>
                                </TabPanel>
                                <TabPanel>
                                    <Text>Network Settings Content...</Text>
                                </TabPanel>
                                <TabPanel>
                                    <Text>System Settings Content...</Text>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </Box>
                </ModalBody>

                <Box mt={8} width="100%">
                    {/* Divider */}
                    <Divider
                        borderColor="gray.500"
                        mb={2}
                        w="92%"
                        ml="32px"
                        border="1px solid gray.500"
                    />

                    {/* Buttons with Info Icons aligned to the right */}
                    <Box
                        display="flex"
                        justifyContent="flex-start"
                        gap={8}
                        alignItems="center"
                        mb={2}
                    >
                        <Box display="flex" alignItems="center">
                            <Button
                                variant="link"
                                color="red.500"
                                fontWeight="bold"
                                fontSize="15px"
                                textDecoration="underline"
                                mr={2}
                                ml={8}
                            >
                                SET TO DEFAULT
                            </Button>
                            <img
                                src={Frame}
                                height={19}
                                width={19}
                                style={{ marginLeft: "8px" }}
                                alt="Icon"
                            />
                        </Box>

                        <Box display="flex" alignItems="center">
                            <Button
                                variant="link"
                                color="red.500"
                                fontWeight="bold"
                                fontSize="15px"
                                textDecoration="underline"
                                mr={2}
                            >
                                REBOOT CAMERA
                            </Button>
                            <img
                                src={Frame}
                                height={19}
                                width={19}
                                style={{ marginLeft: "8px" }}
                                alt="Icon"
                            />
                        </Box>
                    </Box>
                </Box>

                {/* Divider */}
                <Divider width="100%" border="1px solid black" mb="0px" />

                <ModalFooter
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    gap="20px"
                    width="100%"
                    maxWidth="400px"
                    mx="auto"
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
            </ModalContent>
        </Modal>
    );
};

export default CameraSetting;