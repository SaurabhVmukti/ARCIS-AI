import React, { useState } from 'react';
import { Box, Button, Text, Flex, HStack, Spacer, Input, WrapItem, Tag, TagLabel, TagCloseButton, Icon } from '@chakra-ui/react';
import { TimeIcon } from '@chakra-ui/icons';
import { IoOptionsOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import FilterModal from '../../CameraGroup/Component/Filter';
import ArrowImage from "../../../Assets/Images/Camera-View/TopVideoControles/LeftArrow.svg"

const AIEvents = () => {
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const [selectedEvents, setSelectedEvents] = useState([]);
    const [selectedCameras, setSelectedCameras] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState([]);

    // Function to open the FilterModal
    const openFilterModal = () => {
        setIsFilterModalOpen(true);
    };

    // Function to close the FilterModal
    const closeFilterModal = () => {
        setIsFilterModalOpen(false);
    };

    // Function to handle applied filters from FilterModal
    const handleApplyFilters = (cameras, events) => {
        setSelectedCameras(cameras);
        setSelectedEvents(events);
        closeFilterModal();
    };

    // Function to clear all selected tags
    const clearAllTags = () => {
        setSelectedCameras([]);
        setSelectedEvents([]);
        setSelectedStatus([]);
    };

    // Array for days of the week
    const daysOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

    // Get today's date
    const today = new Date();
    const [selectedDate, setSelectedDate] = useState(today);

    // Function to format date
    const formatDate = (date) => {
        return date.toISOString().split('T')[0]; // Returns YYYY-MM-DD
    };

    // Function to shift by a week (left or right)
    const shiftDateByWeek = (direction) => {
        let newDate = new Date(selectedDate); // Create a copy of the selected date

        if (direction === 'left') {
            newDate.setDate(selectedDate.getDate() - 7); // Go back by 7 days
        } else if (direction === 'right') {
            newDate.setDate(selectedDate.getDate() + 7); // Move forward by 7 days
        }

        // Update the selected date state
        setSelectedDate(newDate);
    };

    // Get the first date of the current week (Monday)
    const getMondayOfWeek = (date) => {
        const monday = new Date(date);
        const day = monday.getDay();
        const diff = monday.getDate() - day + (day === 0 ? -6 : 1); // Adjust when Sunday (0)
        return new Date(monday.setDate(diff));
    };

    // Calculate the dates for the current week based on the selected date
    const mondayOfSelectedWeek = getMondayOfWeek(selectedDate);
    const weekDates = Array.from({ length: 7 }, (_, i) => {
        const day = new Date(mondayOfSelectedWeek);
        day.setDate(mondayOfSelectedWeek.getDate() + i);
        return day;
    });

    // Disable right arrow if selected date is today or later
    const isNextWeekDisabled = selectedDate >= today;

    return (
        <Box p={5} width={"100%"}>
            <Flex flexDirection={"column"} gap={0} justifyContent={"left"} textAlign={"left"}>
                {/* Header */}
                {}
                <Flex gap={1} flexDirection={"column"}>
                    <Text fontSize="xl  " fontWeight="bold">AI Events</Text>
                    <Text color="gray.500" mb={4}>List of events triggered by camera</Text>
                </Flex>

                <Flex gap={1} flexDirection={"column"}>
                    <Text fontSize="xl  " fontWeight="bold">Reports</Text>
                    <Text color="gray.500" mb={4}>AI powered analytical reports</Text>
                </Flex>

                <Flex justifyContent={"space-between"}>
                    <Flex flexDirection={"column"}>

                        {/* Filter and Clear */}
                        <HStack spacing={4} mt={4}>
                            <Button
                                leftIcon={<Icon as={IoOptionsOutline} />}
                                colorScheme="purple"
                                backgroundColor="#9234EA"
                                size="sm"
                                borderRadius="md"
                                onClick={openFilterModal}
                            >
                                Filters
                            </Button>

                            <Link
                                color="#9234EA"
                                fontSize="sm"
                                onClick={clearAllTags}
                                style={{ display: `${(selectedCameras.length + selectedEvents.length + selectedStatus.length) === 0 ? "none" : "block"}` }}
                            >
                                Clear All
                            </Link>

                        </HStack>

                        {/* Tags Section */}
                        <HStack spacing={4} mt={4}>
                            <Flex flexDirection={"column"} gap={4} spacing={4}>
                                <HStack>
                                    {selectedCameras.map((camera) => (
                                        <WrapItem key={camera}>
                                            <Tag size="lg" variant="outline">
                                                <TagLabel>{camera}</TagLabel>
                                                <TagCloseButton
                                                    onClick={() =>
                                                        setSelectedCameras(
                                                            selectedCameras.filter((c) => c !== camera)
                                                        )
                                                    }
                                                />
                                            </Tag>
                                        </WrapItem>
                                    ))}
                                </HStack>
                                <HStack>
                                    {selectedEvents.map((event) => (
                                        <WrapItem key={event}>
                                            <Tag size="lg" variant="outline">
                                                <TagLabel>{event}</TagLabel>
                                                <TagCloseButton
                                                    onClick={() =>
                                                        setSelectedEvents(
                                                            selectedEvents.filter((e) => e !== event)
                                                        )
                                                    }
                                                />
                                            </Tag>
                                        </WrapItem>
                                    ))}
                                    {selectedStatus.map((event) => (
                                        <WrapItem key={event}>
                                            <Tag size="lg" variant="outline">
                                                <TagLabel>{event}</TagLabel>
                                                <TagCloseButton
                                                    onClick={() =>
                                                        setSelectedStatus(
                                                            selectedStatus.filter((e) => e !== event)
                                                        )
                                                    }
                                                />
                                            </Tag>
                                        </WrapItem>
                                    ))}
                                </HStack>
                            </Flex>

                            <FilterModal
                                isOpen={isFilterModalOpen}
                                onClose={closeFilterModal}
                                selectedCameras={selectedCameras}
                                selectedStatus={selectedStatus}
                                setSelectedStatus={setSelectedStatus}
                                setSelectedCameras={setSelectedCameras}
                                selectedEvents={selectedEvents}
                                setSelectedEvents={setSelectedEvents}
                                onApply={handleApplyFilters}
                            />
                        </HStack>
                    </Flex>

                    {/* Date and Time Selection */}
                    <Flex justifyContent="space-between" alignItems="center" flexDirection={"column"} gap={3} overflow={"hidden"}>
                        {/* Date Selection */}
                        <Box>
                            <Text fontWeight="medium" mb={2}>Select Date</Text>
                            <Flex alignItems="center" justifyContent={"space-around"} width={"max-content"}>
                                {/* Left arrow to shift to the previous week */}
                                <img src={ArrowImage} alt='Previous Week' onClick={() => shiftDateByWeek('left')} />

                                {/* Day buttons for the week */}
                                <HStack spacing={0} mx={3} width={"277px"} overflow={"hidden"}>
                                    {weekDates.map((day, index) => (
                                        <Button
                                            key={index}
                                            variant="ghost"
                                            colorScheme={formatDate(day) === formatDate(selectedDate) ? 'purple' : 'gray'}
                                            isActive={formatDate(day) === formatDate(selectedDate)}
                                            onClick={() => setSelectedDate(day)}
                                            width={"12px"}
                                        >
                                            <Box textAlign="center" >
                                                <Text fontSize="sm">{daysOfWeek[index]}</Text>
                                                <Text fontWeight="bold" fontSize="lg">{day.getDate()}</Text>
                                            </Box>
                                        </Button>
                                    ))}
                                </HStack>

                                {/* Right arrow to shift to the next week (disabled if trying to go beyond today) */}
                                <Button disabled={isNextWeekDisabled} background={"transparent"} onClick={() => shiftDateByWeek('right')}>
                                    <img src={ArrowImage} style={{ transform: "rotate(180deg)" }} alt='Next Week' />
                                </Button>
                            </Flex>
                        </Box>

                        {/* Time Selection */}
                        <Flex alignItems="center" justifyContent={"space-between"} width={"100%"}>
                            <Box>
                                <Text fontWeight="medium" mb={2}>From</Text>
                                <Input
                                    placeholder="07:00"
                                    type="time"
                                    icon={<TimeIcon />}
                                    border="2px"
                                    borderColor="gray.300"
                                    _hover={{ borderColor: 'purple.300' }}
                                    _focus={{ borderColor: 'purple.500', boxShadow: 'outline' }}
                                    borderRadius="md"
                                />
                            </Box>
                            <Spacer mx={5} />
                            <Box>
                                <Text fontWeight="medium" mb={2}>To</Text>
                                <Input
                                    placeholder="20:00"
                                    type="time"
                                    icon={<TimeIcon />}
                                    border="2px"
                                    borderColor="gray.300"
                                    _hover={{ borderColor: 'purple.300' }}
                                    _focus={{ borderColor: 'purple.500', boxShadow: 'outline' }}
                                    borderRadius="md"
                                />
                            </Box>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    );
};

export default AIEvents;