import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { HStack, Button, Icon, Link, Tag, TagLabel, TagCloseButton, WrapItem, Flex, } from "@chakra-ui/react";
import { IoOptionsOutline } from "react-icons/io5";
import FilterModal from "./Filter";
import GridImage from "../../../Assets/Images/Camera-View/Grid.svg";
import ListImage from "../../../Assets/Images/Camera-View/List.svg";

const TagFilterComponent = ({ viewType }) => {
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const [selectedEvents, setSelectedEvents] = useState([]);
    const [selectedCameras, setSelectedCameras] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState([]);
    const [activeComponent, setActiveComponent] = useState("grid");

    // Function to open the FilterModal
    const openFilterModal = () => {
        console.log("Filter Modal Opened");
        setIsFilterModalOpen(true);
    };

    // Function to close the FilterModal
    const closeFilterModal = () => {
        setIsFilterModalOpen(false);
    };

    // Function to handle applied filters from FilterModal
    const handleApplyFilters = (cameras, events, status) => {
        setSelectedCameras(cameras);
        setSelectedEvents(events);
        setSelectedStatus(status);
        closeFilterModal();
    };

    const clearAllTags = () => {
        setSelectedCameras([]);
        setSelectedEvents([]);
        setSelectedStatus([]);
    };

    return (
        <>
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

                <Link color="#9234EA" fontSize="sm" onClick={clearAllTags} display={`${(selectedCameras.length + selectedEvents.length + selectedStatus.length) === 0 ? "none" : "block"}`}>
                    Clear all
                </Link>
            </HStack>

            <Flex justifyContent={"space-between"} alignItems="center" >
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
                        setSelectedCameras={setSelectedCameras}
                        selectedEvents={selectedEvents}
                        selectedStatus={selectedStatus}
                        setSelectedStatus={setSelectedStatus}
                        setSelectedEvents={setSelectedEvents}
                        onApply={handleApplyFilters}
                    />
                </HStack>

                <HStack width="100px">
                    {activeComponent === "grid" ? (
                        <RouterLink
                            colorScheme="blue"
                            style={{ display: "flex", gap: "10px" }}
                            variant="solid"
                            onClick={() => { viewType("list"); setActiveComponent("list") }}
                        >
                            <img src={ListImage} alt="List Image" />
                            <p>List View</p>
                        </RouterLink>
                    ) : (
                        <RouterLink
                            colorScheme="blue"
                            style={{ display: "flex", gap: "10px" }}
                            variant="solid"
                            onClick={() => { viewType("grid"); setActiveComponent("grid") }}
                        >
                            <img src={GridImage} alt="Grid Image" />
                            <p>Grid View</p>
                        </RouterLink>
                    )}
                </HStack>
            </Flex>
        </>
    );
};

export default TagFilterComponent;