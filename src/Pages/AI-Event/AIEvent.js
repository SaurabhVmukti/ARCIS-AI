import React, { useState } from "react";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { ListItem, Text, UnorderedList, Heading } from "@chakra-ui/react";
import Header from "./Component/Header";
import Middle from "./Component/Middle";
import EventCard from "./Component/CameraCard"
import CameraViewImage from "../../Assets/Images/AI-Event/CameraView.png"

const eventData = [
    {
        title: "Entry Gate No 11",
        date: "24/09/2024",
        time: "03:50 AM",
        duration: "10 min 30 sec",
        badgeText: "Edge Event",
        // imageUrl: "https://via.placeholder.com/260x150",
    },
    {
        title: "Human Detection Event",
        date: "23/09/2024",
        time: "04:10 AM",
        duration: "5 min 15 sec",
        badgeText: "AI Event",
        // imageUrl: "https://via.placeholder.com/260x150",
    },
    {
        title: "Motion Detection",
        date: "22/09/2024",
        time: "02:20 AM",
        duration: "7 min 12 sec",
        badgeText: "Motion Alert",
        // imageUrl: "https://via.placeholder.com/260x150",
    },
    {
        title: "Vehicle Detection",
        date: "21/09/2024",
        time: "11:30 PM",
        duration: "12 min 45 sec",
        badgeText: "Vehicle Event",
        // imageUrl: "https://via.placeholder.com/260x150",
    },
    {
        title: "Unknown Object Detected",
        date: "20/09/2024",
        time: "01:15 AM",
        duration: "8 min 20 sec",
        badgeText: "Object Detection",
        // imageUrl: "https://via.placeholder.com/260x150",
    },
    {
        title: "Suspicious Activity",
        date: "19/09/2024",
        time: "02:50 AM",
        duration: "4 min 30 sec",
        badgeText: "Suspicious Event",
        // imageUrl: "https://via.placeholder.com/260x150",
    },
    {
        title: "Entry Gate No 5",
        date: "18/09/2024",
        time: "05:15 AM",
        duration: "6 min 10 sec",
        badgeText: "Edge Event",
        // imageUrl: "https://via.placeholder.com/260x150",
    },
    {
        title: "Crowd Detection",
        date: "17/09/2024",
        time: "03:40 PM",
        duration: "9 min 50 sec",
        badgeText: "Crowd Event",
        // imageUrl: "https://via.placeholder.com/260x150",
    },
    {
        title: "Fire Detection",
        date: "16/09/2024",
        time: "01:25 PM",
        duration: "3 min 10 sec",
        badgeText: "Fire Alert",
        // imageUrl: "https://via.placeholder.com/260x150",
    },
    {
        title: "Animal Detected",
        date: "15/09/2024",
        time: "12:05 AM",
        duration: "5 min 55 sec",
        badgeText: "Animal Event",
        // imageUrl: "https://via.placeholder.com/260x150",
    }
];

const Event = ({ renderDataView }) => {
    return <SimpleGrid columns={[1, 2, 3]} spacing={"70px"} overflowY={"scroll"} css={{
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
        {renderDataView.map((event, index) => (
            <EventCard
                key={index}
                title={event.title}
                date={event.date}
                time={event.time}
                duration={event.duration}
                badgeText={event.badgeText}
                imageUrl={CameraViewImage} // Replace with dynamic image if needed
            />
        ))}
    </SimpleGrid>
}

const Report = () => {
    return <Box>
        {/* Section Header */}
        <Heading size="md" mb={4}>8.2.2.8 Reporting</Heading>

        {/* List of Points */}
        <UnorderedList spacing={3}>
            <ListItem>
                System should have the ability to generate reports and have a provision to add reports in favorites list.
            </ListItem>
            <ListItem>
                Detailed incident reports shall include all relevant activities, sensor data, snapshots, and periodic reports.
            </ListItem>
            <ListItem>
                Ability to capture Operators response by text, alarm severity, time/date, description, and location.
            </ListItem>
            <ListItem>
                The ICCC shall support comprehensive data filtering based on entity type, event, time stamp, custom fields, etc.
            </ListItem>
            <ListItem>
                Device ID (Camera/Panic Button/RDAS/Microphone/NVR etc.)
            </ListItem>
            <ListItem>
                Train No., Location, Time, Incident Type.
            </ListItem>
            {/* Add more list items as needed */}
        </UnorderedList>

        {/* Additional Text */}
        <Text mt={4}>
            The ICCC shall support report export in PDF, Excel, CSV formats and allow email delivery to specified recipients.
        </Text>

        <UnorderedList mt={3} spacing={3}>
            <ListItem>Child Abuse</ListItem>
            <ListItem>Women Harassment</ListItem>
            <ListItem>Service Request</ListItem>
            <ListItem>Passengers Flights</ListItem>
            {/* Add more list items as per the content */}
        </UnorderedList>

        <Text mt={4}>
            Customization options shall include filters, report lengths, and timeout periods. The user shall also be able to sort the reports.
        </Text>
    </Box>
}


const AIEvent = () => {
    const [actvieComponent, setActiveComponent] = useState("event");
    // Render data on the screen
    const renderDataView = () => {
        switch (actvieComponent) {
            case "event":
                return <Event renderDataView={eventData} />;
            case "report":
                return <Report />;
            default:
                return null;
        }
    };
    return (
        <Flex style={{ width: "100%", }} justifyContent={"center"} flexDirection={"column"} alignItems={"center"}>
            <Header actvieComponent={setActiveComponent} />
            <Middle />
            <Box p={4} width={"100%"}>
                {renderDataView()}
            </Box>
        </Flex>
    );
};

export default AIEvent;