import {Box,Button,HStack,IconButton,Text,Slider,SliderTrack,SliderFilledTrack,SliderThumb,Select,useColorModeValue,Badge,Flex} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { FaPlay, FaCircle } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { useState } from "react";
import { BsCaretDownFill } from "react-icons/bs";
import Previous from "../../../../Assets/Images/Camera-View/Previous.svg"
import Next from "../../../../Assets/Images/Camera-View/Next.png"
import Speaker from "../../../../Assets/Images/Camera-View/Speaker.svg";
import Plus from "../../../../Assets/Images/Camera-View/plus.svg"
import Minus from "../../../../Assets/Images/Camera-View/Minus.svg"
import LineImage from "../../../../Assets/Images/Camera-View/Line.svg"


function PlaybackControls() {
    const [color, setColor] = useState("light");
    // useEffect(() => {
    //     const theme = localStorage.getItem('darkMode');
    //     if (theme) {
    //         setColor("dark");
    //     } else {
    //         setColor("light");
    //     }
    // }, []);
    // const [isSelected, setIsSelected] = useState(false);

    const selectedColor = useColorModeValue('light.primary', 'dark.primary');
    const [isCloudSelected, setIsCloudSelected] = useState(false);
    const [isSdSelected, setIsSdSelected] = useState(true);

    return (
        <Box borderRadius="lg">
            {/* Top Bar with Storage and Controls */}
            <HStack justify="space-between" mb={4}>
                <HStack spacing={2}>
                    <HStack backgroundColor={`${color}.navigation_menu_color`} gap={0} borderRadius={"8px"}>
                        {/* SD Card Button */}
                        <Button
                            bg={isSdSelected ? selectedColor : 'transparent'}
                            color={isSdSelected ? 'white' : 'black'}
                            borderRadius="8px"
                            size="sm"
                            onClick={() => setIsSdSelected(!isSdSelected)}  // Toggle selection state
                        >
                            SD Card
                        </Button>

                        {/* Cloud Button */}
                        <Button
                            bg={isCloudSelected ? selectedColor : 'transparent'}
                            color={isCloudSelected ? 'white' : 'black'}
                            borderRadius="8px"
                            size="sm"
                            onClick={() => setIsCloudSelected(!isCloudSelected)}  // Toggle selection state
                        >
                            Cloud
                        </Button>
                    </HStack>
                    <img src={LineImage} alt="Line" />
                    <HStack spacing={0}>
                        <ChevronLeftIcon w={7} h={7} />
                        <Flex alignItems={"center"} gap={2} fontSize="md">20/09/2024
                            <BsCaretDownFill style={{ marginBottom: "3px"}}  color={`${color}.primary`} />
                        </Flex>
                        <ChevronRightIcon w={7} h={7} />
                    </HStack>
                </HStack>


                <HStack spacing={6}>
                    <img src={Previous} alt="Previous" />
                    <IconButton borderRadius={"50%"} backgroundColor={`${color}.primary`} color={"white"} icon={<FaPlay />} aria-label="Play" />
                    <img src={Next} alt="Previous" />

                    <Select size="sm" width="60px" borderRadius={"8px"} backgroundColor={`${color}.primary`} color={`${color}.background`} defaultValue="1x">
                        <option value="0.5x">0.5x</option>
                        <option value="1x">1x</option>
                        <option value="2x">2x</option>
                    </Select>

                    <HStack spacing={2}>
                        <img src={Speaker} alt="Previous" />
                        <Slider aria-label="timeline-zoom" defaultValue={50} width="150px">
                            <SliderTrack bg="purple.100">
                                <SliderFilledTrack bg="purple.400" />
                            </SliderTrack>
                            <SliderThumb boxSize={4} />
                        </Slider>
                    </HStack>
                </HStack>


                <HStack>
                    {/* <RepeatIcon /> */}
                    <HStack spacing={2}>
                        <Text fontSize="sm">Go Live</Text>
                        <FaCircle color="red" />
                    </HStack>
                    <IconButton icon={<HiDotsVertical />} aria-label="More" />
                </HStack>
            </HStack>

            {/* Timeline Section */}
            <Box position="relative">
                {/* The timeline bar */}
                <Box bg="purple.200" height="80px" borderRadius="md" position="relative">
                    {/* Time markers */}
                    <HStack justify="space-between" px={10} py={2} color="black">
                        <Text fontSize="xs">07:00</Text>
                        <Text fontSize="xs">07:15</Text>
                        <Text fontSize="xs">07:30</Text>
                        <Text fontSize="xs">07:00</Text>
                        <Text fontSize="xs">07:15</Text>
                        <Text fontSize="xs">07:30</Text>
                        <Text fontSize="xs">07:45</Text>
                        <Text fontSize="xs">08:00</Text>
                    </HStack>

                    {/* Suspicious activity marker */}
                    <Badge colorScheme="red" position="absolute" left="20%" top="25%">
                        Suspicious detected
                    </Badge>

                    {/* Red playback line */}
                    <Box
                        position="absolute"
                        height="100%"
                        width="2px"
                        bg="red"
                        left="10%"
                        top="0"
                    />
                </Box>

                {/* Zoom control */}
                <HStack justify="flex-end" mt={2}>
                    <img src={Minus} alt="Previous" />
                    <Slider aria-label="timeline-zoom" defaultValue={50} width="150px">
                        <SliderTrack bg="purple.100">
                            <SliderFilledTrack bg="purple.400" />
                        </SliderTrack>
                        <SliderThumb boxSize={4} />
                    </Slider>
                    <img src={Plus} alt="Previous" />
                </HStack>
            </Box>
        </Box>
    );
}

export default PlaybackControls;