import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {Box,HStack,Text,Grid,Flex,Badge,Image,IconButton,VStack,Heading,createIcon,Link,} from "@chakra-ui/react";
import Header from "./Component/Header";
import FilterBar from "./Component/FilterBar";
import EllipsisMenu from "./Component/EllipsisMenu";
import Pagination from "./Component/Pagination";
import RightSideArrowImage from "../../Assets/Images/Camera-Group/RightSideArrow.svg"
import PlayButton from "../../Assets/Images/Camera-Group/PlayButton.svg"

const itemsPerPage = 6; // Set the number of cards per page

const CameraCardData = [
    {
        statusColor: "#D8B4FE",
        title: "Entry Gate No 01",
        time: "12 mins ago",
    },
    {
        statusColor: "red.500",
        title: "Entry Gate No 02",
        time: "15 mins ago",
    },
    {
        statusColor: "orange.500",
        title: "Entry Gate No 03",
        time: "8 mins ago",
    },
    {
        statusColor: "green.500",
        title: "Entry Gate No 04",
        time: "5 mins ago",
    },
    {
        statusColor: "red.500",
        title: "Entry Gate No 05",
        time: "20 mins ago",
    },
    {
        statusColor: "#D8B4FE",
        title: "Entry Gate No 06",
        time: "12 mins ago",
    },
    {
        statusColor: "red.500",
        title: "Entry Gate No 07",
        time: "15 mins ago",
    },
    {
        statusColor: "orange.500",
        title: "Entry Gate No 08",
        time: "8 mins ago",
    },
    {
        statusColor: "green.500",
        title: "Entry Gate No 09",
        time: "5 mins ago",
    },
    {
        statusColor: "red.500",
        title: "Entry Gate No 10",
        time: "20 mins ago",
    },
    {
        statusColor: "#D8B4FE",
        title: "Entry Gate No 11",
        time: "12 mins ago",
    },
    {
        statusColor: "red.500",
        title: "Entry Gate No 12",
        time: "15 mins ago",
    },
    {
        statusColor: "orange.500",
        title: "Entry Gate No 13",
        time: "8 mins ago",
    },
    {
        statusColor: "green.500",
        title: "Entry Gate No 14",
        time: "5 mins ago",
    },
    {
        statusColor: "red.500",
        title: "Entry Gate No 15",
        time: "20 mins ago",
    },
    {
        statusColor: "#D8B4FE",
        title: "Entry Gate No 16",
        time: "12 mins ago",
    },
    {
        statusColor: "red.500",
        title: "Entry Gate No 17",
        time: "15 mins ago",
    },
    {
        statusColor: "orange.500",
        title: "Entry Gate No 18",
        time: "8 mins ago",
    },
    {
        statusColor: "green.500",
        title: "Entry Gate No 19",
        time: "5 mins ago",
    },
    {
        statusColor: "red.500",
        title: "Entry Gate No 20",
        time: "20 mins ago",
    },
    {
        statusColor: "#D8B4FE",
        title: "Entry Gate No 21",
        time: "12 mins ago",
    },
    {
        statusColor: "red.500",
        title: "Entry Gate No 22",
        time: "15 mins ago",
    },
    {
        statusColor: "orange.500",
        title: "Entry Gate No 23",
        time: "8 mins ago",
    },
    {
        statusColor: "green.500",
        title: "Entry Gate No 24",
        time: "5 mins ago",
    },
    {
        statusColor: "red.500",
        title: "Entry Gate No 25",
        time: "20 mins ago",
    },
    {
        statusColor: "#D8B4FE",
        title: "Entry Gate No 26",
        time: "12 mins ago",
    },
    {
        statusColor: "red.500",
        title: "Entry Gate No 27",
        time: "15 mins ago",
    },
    {
        statusColor: "orange.500",
        title: "Entry Gate No 28",
        time: "8 mins ago",
    },
    {
        statusColor: "green.500",
        title: "Entry Gate No 29",
        time: "5 mins ago",
    },
    {
        statusColor: "red.500",
        title: "Entry Gate No 30",
        time: "20 mins ago",
    }
];

const PlayCircleIcon = createIcon({
    displayName: "PlayCircleIcon",
    viewBox: "0 0 16 16",
    path: (
        <>
            <path
                fill="currentColor"
                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
            />
            <path
                fill="currentColor"
                d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"
            />
        </>
    ),
});

function CameraCard({ statusColor, title, time }) {
    return (
        <Box
            height="350px"
            width="auto"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            // borderColor={statusColor === "orange.500" ? "purple.400" : "transparent"}
            boxShadow={statusColor === "orange.500" ? "0 0 0 3px purple.200" : ""}
        >
            <Box position="relative">
                <Image
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/acaf53afa3a368d56009edb8b54637eb8ca9742403b834cf2a816b047c5ebae0?placeholderIfAbsent=true&apiKey=5e6c7542e7f24225a4d3d5a1be551cbc" // Replace with your image source
                    alt="Camera Snapshot"
                    filter="grayscale(100%)"
                    height="300px"
                    width="full"
                />
                <Badge
                    position="absolute"
                    top={2}
                    left={2}
                    h={3}
                    w={3}
                    borderRadius="full"
                    bg={statusColor}
                />
                <RouterLink to="/camera-view">
                <img src={PlayButton} alt="Play icon button" style={{ position:"absolute", bottom:"0.5rem", right:"0.5rem"}}/>
                    
                </RouterLink>
            </Box>

            <VStack
                align="start"
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                bg="purple.100"
                height="48px"
                width="auto"
                paddingX={3}
                paddingTop="2px"
                spacing={0}
            >
                <HStack justifyContent="start" flexDirection="column" gap={0}>
                    <Text fontWeight="bold" fontSize="sm">
                        {title}
                    </Text>
                    <Text fontSize="xs" color="gray.600">
                        &nbsp;&nbsp;&nbsp;&nbsp;Snapshot : {time}
                    </Text>
                </HStack>
                <EllipsisMenu />
            </VStack>
        </Box>
    );
}

const ListViewCard = ({ statusColor, title, time }) => {
    return (
        <Box
            maxWidth="300px"
            display="flex"
            height={"80px"}
            backgroundColor="#D8B4FE"
            borderRadius="5px"
            gap={5} // Space between image and text
            borderColor={statusColor === "orange.500" ? "purple.400" : "transparent"}
            boxShadow={statusColor === "orange.500" ? "0 0 0 3px purple.200" : ""}
        >
            <Box position="relative" width="100%" height="100%" maxWidth="100px">
                <Image
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/69e226882d88786f08f95b77bbcde80ae7896b8463d227b26b9fe8fd7ba64f2a?placeholderIfAbsent=true&apiKey=5e6c7542e7f24225a4d3d5a1be551cbc"
                    alt="Entry gate background"
                    objectFit="cover"
                    objectPosition="center"
                    height="100%"
                    width="100%"
                    position="relative"
                />
                <RouterLink to="/camera-view">
                    <IconButton
                        icon={<PlayCircleIcon height={30} width={30} />}
                        aria-label="Play"
                        variant="solid"
                        colorScheme="#141E35"
                        position="absolute"
                        backgroundColor="#D8B4FE"
                        opacity="50%"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                        borderRadius="100%"
                        padding="4px"
                    />
                </RouterLink>
            </Box>
            <Box flex="1">
                {" "}
                {/* Added flex="1" to take remaining width */}
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Heading size="sm" fontWeight="bold" textAlign="start">
                        {title}
                    </Heading>
                    <EllipsisMenu />
                </Box>
                <Text
                    color="#65758b"
                    fontSize="12px"
                    fontWeight="400"
                    textAlign="start"
                >
                    Snapshot : {time}
                </Text>
            </Box>
        </Box>
    );
};

const GridView = ({ filteredCameras }) => {
    return (
        <Grid templateColumns="repeat(3, 1fr)" gap={10} pb={8} pr={3} 
        height={"67vh"} overflowY={"scroll"} css={{
            "&::-webkit-scrollbar": {
                width: "5px",
            },
            "&::-webkit-scrollbar-track": {
                background: "white",
            },
            "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#E9D8FD",
                borderRadius: "20px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "#D6BCFA",
            },
        }}>
            {filteredCameras.map((camera) => (
                <CameraCard
                    key={camera.title}
                    statusColor={camera.statusColor}
                    title={camera.title}
                    time={camera.time}
                />
            ))}
        </Grid>
    );
};

const ListView = ({ filteredCameras }) => {
    return (
        <Box height={"67vh"} overflowY={"scroll"} css={{
            "&::-webkit-scrollbar": {
                width: "5px",
            },
            "&::-webkit-scrollbar-track": {
                background: "white",
            },
            "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#E9D8FD",
                borderRadius: "20px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "#D6BCFA",
            },
        }} >
        <Grid templateColumns="repeat(4, 1fr)" marginLeft="0" gap={10} >
            {filteredCameras.map((camera) => (
                <ListViewCard
                    statusColor={camera.statusColor}
                    title={camera.title}
                    time={camera.time}
                    key={camera.title}
                />
            ))}
        </Grid>
        </Box>
    );
}

const CameraGroup = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [actvieComponent, setActiveComponent] = useState("grid");
    const [currentPage, setCurrentPage] = useState(1); // Add state for pagination

    // Filter camera data based on search term
    const filteredCameras = CameraCardData.filter((camera) =>
        camera.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Calculate the number of pages
    const totalPages = Math.ceil(filteredCameras.length / itemsPerPage);

    // Get current items for the page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredCameras.slice(indexOfFirstItem, indexOfLastItem);

    // Render data on the screen
    const renderDataView = () => {
        switch (actvieComponent) {
            case "grid":
                return <GridView filteredCameras={currentItems} />;
            case "list":
                return <ListView filteredCameras={currentItems} />;
            default:
                return null;
        }
    };

    return (
        <Flex flexDirection="column">
            <Header onSearch={setSearchTerm} />
            <Box>
                <HStack spacing={3} alignItems="center">
                    <Text fontWeight="bold" fontSize="20px">
                        Camera ({filteredCameras.length})
                    </Text>
                    <img src={RightSideArrowImage} alt="right side arrow" />
                    <Link color="#9234EA" fontSize="14px" fontWeight="semibold">
                        Grouping
                    </Link>
                </HStack>
                <FilterBar viewType={setActiveComponent} />
            </Box>
            <Box pt={3}>
                {renderDataView()}
            </Box>
            <Box>
                {/* Pagination Component */}
                <Pagination 
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={(page) => setCurrentPage(page)}
                />
            </Box>
        </Flex>
    );
};

export default CameraGroup;