import React, { useState } from 'react';
import { Box, Image, Text, Badge, Flex, IconButton } from '@chakra-ui/react';
import { FiMoreVertical } from 'react-icons/fi';
import PlayBtnImage from "../../../Assets/Images/AI-Event/PlayButton.svg";
import VideoPlayer from '../../VideoPlayer/VideoPlayer';

const EventCard = ({ title, date, time, duration, badgeText, imageUrl }) => {
    const [isVideoPlayerOpen, setIsVideoPlayerOpen] = useState(false);

    // Function to open the VideoPlayer
    const openVideoPlayer = () => {
        setIsVideoPlayerOpen(true);
    };

    // Function to close the VideoPlayer
    const closeVideoPlayer = () => {
        setIsVideoPlayerOpen(false);
    };

    return (
        <Box
            height="292px"
            borderWidth="1px"
            borderRadius="lg"
            bg="gray.50"
            shadow="sm"
        >
            {/* Event Image */}
            <Box position="relative" onClick={openVideoPlayer}>
                <Image
                    src={imageUrl || "https://via.placeholder.com/260x150"}
                    alt="Event"
                    objectFit="cover"
                    w="100%"
                    h="242px"
                />
                {/* Dynamic Badge */}
                <Badge
                    position="absolute"
                    top="10px"
                    left="10px"
                    colorScheme="cyan"
                    fontSize="0.8em"
                    px={2}
                    py={1}
                    borderRadius="md"
                >
                    {badgeText}
                </Badge>
                {/* Play Icon */}
                <img 
                    src={PlayBtnImage}
                    alt='Play Button'
                    style={{
                        position: "absolute",
                        bottom: "10px",
                        right: "10px",
                        width: "40px",  // Adjust as needed
                        height: "40px",
                        borderRadius: "50%",  // Circular image
                    }}
                />
            </Box>

            <Flex justifyContent="space-between" alignItems="center" p="2px" px="8px">
                {/* Event Details */}
                <Box textAlign="left">
                    <Text fontWeight="700" fontSize="14px">
                        {title}
                    </Text>
                    <Flex justifyContent="space-around" gap={5} align="center" mb={1}>
                        <Text fontSize="sm" color="gray.600">
                            {date}
                        </Text>
                        <Text fontSize="sm" color="gray.600">
                            {time}
                        </Text>
                        <Text fontSize="sm" color="gray.500">
                            Duration: {duration}
                        </Text>
                    </Flex>
                </Box>

                {/* More Options Icon */}
                <Flex justify="flex-end" p={2}>
                    <IconButton
                        aria-label="More options"
                        icon={<FiMoreVertical />}
                        variant="ghost"
                        size="sm"
                    />
                </Flex>
            </Flex>

            {/* VideoPlayer Modal */}
            <VideoPlayer
                isOpen={isVideoPlayerOpen}
                onClose={closeVideoPlayer}
            />
        </Box>
    );
};

export default EventCard;