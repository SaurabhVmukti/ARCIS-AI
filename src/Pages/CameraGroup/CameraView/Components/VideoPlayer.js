import { Box, Flex, IconButton, Image, Text, Stack, Progress } from "@chakra-ui/react";
import { IoIosInformation } from 'react-icons/io';
import Arrow from "../../../../Assets/Images/Camera-View/SingleArrow.svg"
import FullScreenImage from "../../../../Assets/Images/Camera-View/FullScreen.svg"
import CameraImage from "../../../../Assets/Images/Camera-View/TopVideoControles/camera.svg"
import DownloadImage from "../../../../Assets/Images/Camera-View/TopVideoControles/download.svg"
import VideoImage from "../../../../Assets/Images/Camera-View/TopVideoControles/video.svg"
import BrainImage from "../../../../Assets/Images/Camera-View/TopVideoControles/brain-cog.svg"
import LeftSideArrowImage from "../../../../Assets/Images/Camera-View/TopVideoControles/LeftArrow.svg"

function VideoPlayer() {
    return (
        <Box bg="gray.900" borderRadius="lg" overflow="hidden" position="relative" height="60vh" width="63vw">
            {/* Video Section */}
            <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/acaf53afa3a368d56009edb8b54637eb8ca9742403b834cf2a816b047c5ebae0?placeholderIfAbsent=true&apiKey=5e6c7542e7f24225a4d3d5a1be551cbc" // Replace with video source or thumbnail
                alt="Video Stream"
                width="100%"
                height="100%"
                objectFit="cover"
            />

            <Flex position="absolute" alignItems={'end'} left={6} right={6} bottom={2}>
                {/* Overlay Controls (Left) */}
                <Stack spacing={4} alignItems="flex-start" zIndex={2}>

                    {/* Camera Info */}
                    <Box color="white">
                        <Text fontSize="12px" marginLeft={-2}>Entry gate no. 11</Text>
                        <Flex gap="12px" alignItems={"center"} >
                            <Text fontSize="12px" color="gray.300">20/09/2024</Text>
                            <Text fontSize="12px" color="gray.300">14:50</Text>
                        </Flex>
                    </Box>
                    {/* Play/Pause Button */}
                    <Flex gap={2} alignItems={"center"} >
                        <img src={FullScreenImage} alt="Full screen icon" />
                        <IoIosInformation style={{ backgroundColor: "white", padding: "1px", borderRadius: "50%", color: "black", fontSize: "28px" }} boxSize={6} />
                    </Flex>
                </Stack>


                {/* Progress Bar (Bottom) */}
                <Box width={"100%"} pb={2}>
                    <Progress value={40} colorScheme="purple" height="2px" />
                </Box>


                {/* Vertical Controls (Right) */}
                <Flex
                    spacing={2}
                    zIndex={2}
                    gap={3}
                    width={"10rem"}
                    flexDirection="column"
                    alignItems="center"
                >
                    <Box>
                        <img src={Arrow} alt="top-arrow" />
                    </Box>
                    <Flex alignItems={"center"}>
                        <img src={Arrow} alt="left arrow" style={{ transform: "rotate(270deg)", marginRight: "4rem" }} />
                        <img src={Arrow} alt="top-arrow" style={{ transform: "rotate(90deg)" }} />
                    </Flex>
                    <Box>
                        <img src={Arrow} alt="top-arrow" style={{ transform: "rotate(180deg)" }} />
                    </Box>
                </Flex>
            </Flex>


            <Flex justifyContent={'space-between'} position='absolute' right={4} top={4} left={4} alignItems={'start'}>
                <Flex position={"absolute"} gap={1} alignItems={"start"}>
                    <Flex
                        // position="absolute"
                        flexDirection="column"
                        width="56px"
                        height="185px"
                        overflow="hidden"
                    >
                        <IconButton
                            borderBottomLeftRadius={0}
                            borderTopRightRadius={0}
                            icon={<img src={CameraImage} alt="Camera icon" style={{ width: "24px", height: "24px" }} />}
                            colorScheme="white"
                            backgroundColor="white"
                            aria-label="Camera button"
                            zIndex={2}
                        />
                        <IconButton
                            mt={2} // Adding margin to separate vertically
                            borderBottomLeftRadius={0}
                            borderTopRightRadius={0}
                            icon={<img src={VideoImage} alt="Video icon" style={{ width: "24px", height: "24px" }} />}
                            colorScheme="white"
                            backgroundColor="white"
                            aria-label="Video button"
                            zIndex={2}
                        />
                        <IconButton
                            mt={2}
                            borderBottomLeftRadius={0}
                            borderTopRightRadius={0}
                            icon={<img src={DownloadImage} alt="Download icon" style={{ width: "24px", height: "24px" }} />}
                            colorScheme="white"
                            backgroundColor="white"
                            aria-label="Download button"
                            zIndex={2}
                        />
                        <IconButton
                            mt={2}
                            borderBottomLeftRadius={0}
                            borderTopRightRadius={0}
                            icon={<img src={BrainImage} alt="Brain icon" style={{ width: "24px", height: "24px" }} />}
                            colorScheme="white"
                            backgroundColor="white"
                            aria-label="Brain button"
                            zIndex={2}
                        />
                    </Flex>
                    <Box width={"20px"} >
                        <img src={LeftSideArrowImage} alt="Arrow icon" style={{ width: "44px", height: "44px" }} />

                    </Box>
                </Flex>

                <Box position={'absolute'} right={0} >
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8cd8b85581cc0b3f37de43c5f5e99558bf418b8c52f805dc5a2bcb111cce9bf5?placeholderIfAbsent=true&apiKey=5e6c7542e7f24225a4d3d5a1be551cbc" alt="Camera controls" />
                </Box>
            </Flex>


        </Box>
    );
}

export default VideoPlayer;