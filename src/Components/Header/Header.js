import React, { useState, useEffect } from 'react';
import {
    Box,
    Flex,
    Image,
    Text,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalBody,
    useDisclosure,
    FormControl,
    FormLabel,
    Input,
    Badge,
    ChakraProvider,
} from '@chakra-ui/react';
import { BellIcon } from '@chakra-ui/icons';
import { TbUser } from "react-icons/tb";
import { SlLock } from "react-icons/sl";
import { CgLogOff } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
const Header = ({ toggleTextVisibility }) => {
    const navigate = useNavigate();
    const logoutClick = () => {
        navigate('/');
    };

    const arcisclick = () => {
        navigate('/arcisgpt');
    };

    const [isDarkMode, setIsDarkMode] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [notificationCount, setNotificationCount] = useState(3); // Set a test value for demonstration

    useEffect(() => {
        document.body.style.backgroundColor = isDarkMode ? '#231F1F' : '#FCFCFC';
        document.body.style.color = isDarkMode ? '#fff' : '#000';
    }, [isDarkMode]);

    const handleToggle = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    return (
        <Box
            display="flex"
            width="100%"
            flexShrink="0"
            gap="20px"
            color={isDarkMode ? 'white' : '#000'}
            flexWrap="wrap"
            justifyContent="space-between"
            bg={isDarkMode ? '#333' : '#FCFCFC'}
            boxShadow="0px 2px 20px 1px rgba(0, 0, 0, 0.25)"
            position="fixed"
            top="0"
            left="0"
            right="0"
            zIndex="1000"
            height='86px'
        >
            <Flex align="center" gap="16px">
                <Image
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1114720dfa5d8a53919938ea8191789f5ff6542c924cdf7d17533c23e35fccf9?placeholderIfAbsent=true&apiKey=21c2172730ed406bb6f91788633e80d1"
                    alt=""
                    boxSize="24px"
                    cursor="pointer"
                    ml={5}
                    filter={isDarkMode ? "invert(1)" : "none"}
                    onClick={toggleTextVisibility}
                />
                <Image
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ca78d251447497e1663441079720e7917711d6f5d5758ef4406ed0691135fa2?placeholderIfAbsent=true&apiKey=21c2172730ed406bb6f91788633e80d1"
                    alt="Company Logo"
                    height="50%" cursor={"pointer"}
                />
            </Flex>

            <Flex
                align="center"
                marginLeft="10px"
                gap={{ base: "15px", md: "33px" }}
                flexWrap="wrap"
                justify="space-evenly"
                width="50%"
            >
                <Button
                    bg="#9234ea"
                    borderRadius="8px"
                    minH="34px"
                    px="18px"
                    fontWeight="800"
                    border={0}
                    color={isDarkMode ? "black" : "white"}
                    fontSize={{ base: "12px", md: "14px" }}
                    lineHeight="24px"
                    shadow="0 1px 2px 0 rgba(16, 24, 40, 0.05)"
                    _hover={{ bg: "#7b2cd1" }}
                    onClick={onOpen}
                >
                    Add new device
                </Button>

                <Modal onClose={onClose} isOpen={isOpen} isCentered>
                    <ModalOverlay />
                    <ModalContent
                        zIndex={1500}
                        maxW={580}
                        maxH={400}
                        bg={isDarkMode ? '#231F1F' : 'white'}
                        color={isDarkMode ? 'white' : 'black'}
                    >
                        <ModalHeader textAlign={'center'}>Add New Device</ModalHeader>
                        <ModalBody pb={6} textAlign={'center'}>
                            <FormControl mt={5}>
                                <FormLabel marginLeft='120px'>Enter Device name:</FormLabel>
                                <Input placeholder='XYZ' width='300px' borderColor='gray' />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel marginLeft='120px'>Enter Device ID:</FormLabel>
                                <Input placeholder='XYZ' width='300px' borderColor='gray' borderRadius='10px' />
                            </FormControl>
                            <Text fontSize="sm" mt={2} marginRight={'140px'}>
                                Find this ID in your mail
                            </Text>
                        </ModalBody>
                        <hr style={{ marginTop: "30px", borderTop: "3px solid gray", height: "20px" }} />
                        <ModalFooter marginRight={'10px'} justifyContent={'space-evenly'}>
                            <Button onClick={onClose} w="150px" border='1px' background='0' color='red' borderColor='red' _hover={'none'}>Cancel</Button>
                            <Button onClick={onClose} w="150px" background='#9234EA' color='white' _hover={'none'}>Save Device</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>

                <Flex align="center" gap="10px" borderRadius="8px" onClick={arcisclick}>
                    <Image
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3a2701095ad0d91b6d040292b027db39d478c4c5e67902f91a548f740020fe4"
                        alt="Icon"
                        boxSize="35px"
                        filter={isDarkMode ? 'white' : 'black'}
                    />
                    <Text fontSize={{ base: '10px', md: '12px' }} color={isDarkMode ? 'white' : '#141e35'} cursor={"pointer"}>
                        ArcisGPT
                    </Text>
                </Flex>

                {/* Toggle Switch */}
                <Box display="flex" alignItems="center" justifyContent="center" height="24px">
                    <Text fontSize="12px" mx="8px">Light</Text>
                    <Box as="input" type="checkbox" id="mode" style={{ opacity: 0, width: 0, height: 0 }} checked={isDarkMode} onChange={handleToggle} />
                    <Box
                        as="label"
                        htmlFor="mode"
                        onClick={() => {
                            localStorage.setItem("theme", "dark");
                            console.log("Dark Mode");
                        }}
                        style={{
                            cursor: 'pointer',
                            backgroundColor: isDarkMode ? '#7f56d9' : '#ccc',
                            borderRadius: '34px',
                            width: '40px',
                            height: '24px',
                            position: 'relative',
                            display: 'inline-block',
                            transition: 'background-color 0.3s',
                        }}
                    >
                        <Box
                            as="span"
                            style={{
                                position: 'absolute',
                                backgroundColor: isDarkMode ? '#333' : 'white',
                                borderRadius: '50%',
                                width: '16px',
                                height: '16px',
                                left: '4px',
                                top: '4px',
                                transform: isDarkMode ? 'translateX(16px)' : 'none',
                                transition: 'transform 0.3s',
                            }}
                        />
                    </Box>
                    <Text fontSize="12px" mx="8px">Dark</Text>
                </Box>

                {/* Notification Icon with Badge */}
                <Box position="relative">
                    <BellIcon boxSize="28px" color={isDarkMode ? "white" : "black"} />
                    {notificationCount > 0 && (
                        <Badge
                            position="absolute"
                            top="-4px"
                            left="10px"
                            fontWeight={'bold'}
                            backgroundColor={'red'}
                            color="white"
                            borderRadius="10px"
                            height={4}
                            // Set a specific width instead of 0
                            width="auto" // or specify a width if needed
                            px={2} // Adjust the horizontal padding here
                            fontSize="10px"
                        >
                            {notificationCount}
                        </Badge>

                    )}
                </Box>

                <Menu>
                    <MenuButton as={Button} variant="ghost" cursor="pointer" border={0} background="none">
                        <Flex align="center" gap="10px">
                            <Image
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/99f8bec5fc8e1b97999327164522a0a92e4def0c1fa7e87b125b0ea26645e659?placeholderIfAbsent=true&apiKey=21c2172730ed406bb6f91788633e80d1"
                                alt=""
                                boxSize="21px"
                                filter={isDarkMode ? "invert(1)" : "invert(0)"}
                            />
                            <Text cursor="pointer" fontSize={{ base: "12px", md: "14px" }} filter={isDarkMode ? "invert(1)" : "invert(0)"}
                            >Andrew Miller</Text>
                        </Flex>
                    </MenuButton>

                    <MenuList zIndex="1000" mt="30px" borderRadius={10} boxShadow="0 2px 10px rgba(0, 0, 0, 0.1)" padding={15} h={140}>
                        <MenuItem background="none" border={0} icon={<TbUser fontSize="20px" />} mb={10}>
                            Edit Profile
                        </MenuItem>
                        <MenuItem background="none" border={0} icon={<SlLock fontSize="20px" />}>
                            Change Password
                        </MenuItem>
                        <hr style={{ marginTop: "20px" }} />
                        <MenuItem
                            background="none"
                            border={0}
                            mb={8}
                            mt={5}
                            icon={<CgLogOff fontSize="20px" />}
                            onClick={logoutClick}
                            style={{ color: "red" }}
                        >
                            Logout
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
        </Box>
    );
};

export default Header;