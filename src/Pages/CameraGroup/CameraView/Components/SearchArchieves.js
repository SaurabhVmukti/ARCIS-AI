import { Box, Button, Input, Flex, Stack, Text, Image, Heading, InputGroup, InputRightElement, } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import React, { useState, forwardRef } from "react";
import "react-datepicker/dist/react-datepicker.css";
import SmallViewImage from "../../../../Assets/Images/Camera-View/SmallView.svg";

function SearchArchives() {
    const [startDate, setStartDate] = useState(new Date());

    // Forward ref for the custom calendar icon input
    const CustomDateInput = forwardRef(({ value, onClick }, ref) => (
        <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9e379764ccd420a9ec9980469d463bb5e4bbf54cb46fe0d89ba51f45961ae23?placeholderIfAbsent=true&apiKey=5e6c7542e7f24225a4d3d5a1be551cbc"
            alt="Calendar"
            height="15px"
            onClick={onClick}
            ref={ref}
            style={{ cursor: "pointer" }}
        />
    ));

    // //Forward ref for the custome time icon input
    // const CustomTimeInput = forwardRef(({ value, onClick }, ref) => (
    //     <img
    //       src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9e379764ccd420a9ec9980469d463bb5e4bbf54cb46fe0d89ba51f45961ae23?placeholderIfAbsent=true&apiKey=5e6c7542e7f24225a4d3d5a1be551cbc"
    //       alt="Calendar"
    //       height="15px"
    //       onClick={onClick}
    //       ref={ref}
    //       style={{ cursor: "pointer" }}
    //     />
    //   ));

    return (
        <Box
            p={3}
            boxShadow="1px 2px 20px 1px rgba(0, 0, 0, 0.25)"
            borderRadius="lg"
            bg="#fcfcfc"
            w={{ base: "100%", md: "350px" }}
            h={{ base: "auto", md: "743px" }}
        // m="auto"
        >
            {/* Header */}
            <Heading
                as="h2"
                mt={1}
                size="md"
                textAlign="center"
                color={"#141e35"}
                mb={3.5}
                fontSize={{ base: "lg", md: "xl" }}
            >
                Search Archives
            </Heading>

            {/* Date Picker and Time Inputs */}
            <Stack spacing={4}>
                {/* Select Date */}
                <Flex
                    alignItems="center"
                    flexDirection="column"
                    w="100%"
                    textAlign="left"
                    gap={2}
                >
                    <Text width={"100%"} textAlign={"left"}>Select Date</Text>
                    <InputGroup size="sm" width="100%">
                        <Input
                            id="dateInput"
                            type="text"
                            value={startDate ? startDate.toLocaleDateString() : ""}
                            readOnly
                        />
                        <InputRightElement width="3rem" zIndex={10}>
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                dateFormat="dd/MM/yyyy"
                                maxDate={new Date()}
                                customInput={<CustomDateInput />}
                            />
                        </InputRightElement>
                    </InputGroup>
                </Flex>

                <Flex
                    w="100%"
                    justifyContent="space-between"
                    flexDirection={{ base: "column", md: "row" }}
                >
                    {/* From Time */}
                    <Flex
                        alignItems="center"
                        flexDirection="column"
                        w={{ base: "100%", md: "48%" }}
                        mt={{ base: 2, md: 0 }}
                    >
                        <Text width={"100%"} textAlign={"left"}>From</Text>
                        <Input type="time" defaultValue="09:00" size="sm" w="100%" />
                    </Flex>

                    {/* To Time */}
                    <Flex
                        alignItems="center"
                        flexDirection="column"
                        w={{ base: "100%", md: "48%" }}
                        mt={{ base: 2, md: 0 }}
                    >
                        <Text width={"100%"} textAlign={"left"}>To</Text>
                        <Input type="time" defaultValue="16:00" size="sm" w="100%" />
                    </Flex>
                </Flex>

                {/* Find Recording Button */}
                <Button colorScheme="" position={""} backgroundColor={`light.primary`} width="100%" mt={4}>
                    Find Recording
                </Button>
            </Stack>

            {/* Archive Thumbnails */}
            <Box
                mt={6}
                height={{ base: "auto", md: "450px" }}
                overflowY={{ base: "visible", md: "scroll" }}
                pr={"20px"}
                css={{
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
                }}
            >
                {Array(7)
                    .fill(0)
                    .map((_, index) => (
                        <Flex
                            key={index}
                            mb={4}
                            alignItems="center"
                            flexDirection={{ base: "column", md: "row" }}
                        >
                            <Image
                                boxSize="60px"
                                objectFit="cover"
                                src={SmallViewImage}
                                alt="Archive Thumbnail"
                                mr={{ base: 0, md: 4 }}
                                mb={{ base: 2, md: 0 }}
                                borderRadius="md"
                            />
                            <Box flex={1} textAlign={{ base: "center", md: "left" }}>
                                <Text fontSize="sm">Entry gate no.11</Text>
                                <Text fontSize="xs" color="gray.500">
                                    20/09/2024
                                </Text>
                            </Box>
                            <Text
                                fontSize="sm"
                                color="gray.700"
                                textAlign={{ base: "center", md: "right" }}
                            >
                                14:50
                            </Text>
                        </Flex>
                    ))}
            </Box>
        </Box>
    );
}

export default SearchArchives;
