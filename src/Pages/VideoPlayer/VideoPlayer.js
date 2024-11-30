import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, ModalFooter, Box, Flex, Text, Progress, Stack, Image, IconButton, HStack, Button, Select, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from "@chakra-ui/react";
import { FaPlay } from 'react-icons/fa';
import { IoIosInformation } from 'react-icons/io';
import FullScreenImage from "../../Assets/Images/Camera-View/FullScreen.svg";
import CameraImage from "../../Assets/Images/Camera-View/TopVideoControles/camera.svg";
import DownloadImage from "../../Assets/Images/Camera-View/TopVideoControles/download.svg";
import Previous from "../../Assets/Images/Camera-View/Previous.svg";
import Next from "../../Assets/Images/Camera-View/Next.png";
import Speaker from "../../Assets/Images/Camera-View/Speaker.svg";

const VideoPlayer = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered >
            <ModalOverlay />
            <ModalContent width={"983px"} maxWidth={"auto"} height={"612px"}>
                <ModalCloseButton />

                <ModalBody p={0} >
                    <Box bg="gray.900" overflow="hidden" position="relative" >
                        {/* Video Section */}
                        <Image
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/acaf53afa3a368d56009edb8b54637eb8ca9742403b834cf2a816b047c5ebae0?placeholderIfAbsent=true&apiKey=5e6c7542e7f24225a4d3d5a1be551cbc" // Replace with video source or thumbnail
                            alt="Video Stream"
                            width="100%"
                            height="100%"
                            objectFit="cover"
                        />

                        {/* Overlay Controls */}
                        <Flex position="absolute" alignItems="end" left={6} right={6} bottom={2} >
                            <Stack spacing={4} alignItems="flex-start" width="100%" zIndex={2}>
                                <Box color="white">
                                    <Text fontSize="12px" marginLeft={0}>Entry gate no. 11</Text>
                                    <Flex gap="12px" alignItems="center">
                                        <Text fontSize="12px" color="gray.300">20/09/2024</Text>
                                        <Text fontSize="12px" color="gray.300">14:50</Text>
                                    </Flex>
                                </Box>

                                <Box width="100%" pb={2}>
                                    <Progress value={40} colorScheme="purple" height="2px" />
                                </Box>
                            </Stack>
                        </Flex>

                        <Flex justifyContent="space-between" position="absolute" right={4} top={4} left={4} alignItems="start">
                            <Box position="absolute" left={0}>
                                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8cd8b85581cc0b3f37de43c5f5e99558bf418b8c52f805dc5a2bcb111cce9bf5?placeholderIfAbsent=true&apiKey=5e6c7542e7f24225a4d3d5a1be551cbc" alt="Camera controls" />
                            </Box>
                        </Flex>
                    </Box>

                    {/* Video Controller */}
                    <Flex bg="purple.100" p={4} align="center" justify="space-between" borderRadius="md">
                        {/* Left controls */}
                        <Flex align="center" gap={2}>
                            <img src={FullScreenImage} alt="Full screen icon" />
                            <IoIosInformation style={{ backgroundColor: "white", padding: "1px", borderRadius: "50%", color: "black", fontSize: "28px" }} />
                            <Flex alignItems={"center"}>
                                <IconButton
                                    backgroundColor="transparent"
                                    icon={<img src={CameraImage} alt="Camera icon" style={{ width: "24px", height: "24px" }} />}
                                    aria-label="Camera button"
                                />
                                Take Snapshot
                            </Flex>
                            <Flex alignItems={"center"}>
                                <IconButton
                                    backgroundColor="transparent"
                                    icon={<img src={DownloadImage} alt="Download icon" style={{ width: "24px", height: "24px" }} />}
                                    aria-label="Download button"
                                />
                                Download Clip
                            </Flex>
                        </Flex>

                        {/* Playback Controls */}
                        <HStack spacing={6}>
                            <img src={Previous} alt="Previous" />
                            <IconButton borderRadius="50%" bg="purple.400" color="white" icon={<FaPlay />} aria-label="Play" />
                            <img src={Next} alt="Next" />

                            <Select size="sm" width="60px" borderRadius="8px" bg="purple.400" color="white" defaultValue="1x">
                                <option value="0.5x">0.5x</option>
                                <option value="1x">1x</option>
                                <option value="2x">2x</option>
                            </Select>

                            <HStack spacing={2}>
                                <img src={Speaker} alt="Speaker" />
                                <Slider aria-label="volume" defaultValue={50} width="150px" >
                                    <SliderTrack bg="purple.100" backgroundColor={"white"}>
                                        <SliderFilledTrack bg="purple.400" />
                                    </SliderTrack>
                                    <SliderThumb boxSize={4} />
                                </Slider>
                            </HStack>
                        </HStack>

                        {/* Close button */}
                        <Button colorScheme="red" variant="outline" onClick={onClose} px={8}>
                            Close
                        </Button>
                    </Flex>
                </ModalBody>

                {/* Optional Footer */}
                <ModalFooter></ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default VideoPlayer;