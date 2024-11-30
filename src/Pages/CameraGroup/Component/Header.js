import { Flex, Tabs, TabList, Tab, InputGroup, InputLeftElement, Input, } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Header = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch(value);
    };

    return (
        <Flex justifyContent="flex-end" gap="20%">
            <Tabs variant="unstyled" defaultIndex={0}>
                <TabList backgroundColor="#D8B4FE" borderRadius="10px" width="400px">
                    <Tab
                        width="200px"
                        borderRadius="10px"
                        _selected={{ color: "white", backgroundColor: "#9234EA" }}
                    >
                        My Cameras
                    </Tab>
                    <Tab
                        width="200px"
                        borderRadius="10px"
                        _selected={{ color: "white", backgroundColor: "#9234EA" }}
                    >
                        Shared Cameras
                    </Tab>
                </TabList>
            </Tabs>

            <InputGroup width="max-content">
                <InputLeftElement
                    pointerEvents="none"
                    children={
                        <SearchIcon color="black" paddingBottom="6px" fontSize="1.3rem" />
                    }
                />
                <Input
                    type="text"
                    height="35px"
                    width="360px"
                    placeholder="Search camera, Location, Model no."
                    value={searchTerm}
                    onChange={handleSearch}
                    borderRadius="md"
                    border="1px solid"
                    borderColor="gray.300"
                    _focus={{
                        borderColor: "blue.500",
                        boxShadow: "0 0 0 1px blue.500",
                    }}
                    _placeholder={{
                        color: "gray.500",
                    }}
                    size="md"
                />
            </InputGroup>
        </Flex>
    );
};

export default Header;