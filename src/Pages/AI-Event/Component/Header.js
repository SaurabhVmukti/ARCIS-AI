import React from 'react';
import { Flex, TabList, Tab, Tabs } from '@chakra-ui/react';

const Header = ({actvieComponent}) => {
    return (
        <Flex
            bg="purple.50"
            borderRadius="md"
            padding="2"
            width="fit-content"
            alignItems="center"
        >
            <Tabs variant="unstyled" defaultIndex={0}>
                <TabList backgroundColor="#D8B4FE" borderRadius="10px">
                    <Tab
                        width="134px"
                        borderRadius="10px"
                        _selected={{ color: "white", backgroundColor: "#9234EA" }}
                        onClick={() => actvieComponent("event")}
                    >
                        Events
                    </Tab>
                    <Tab
                        width="134px"
                        borderRadius="10px"
                        _selected={{ color: "white", backgroundColor: "#9234EA" }}
                        onClick={() => actvieComponent("report")}
                    >
                        Reports
                    </Tab>
                    <Tab
                        fontSize={"lg"}
                    >
                        |
                    </Tab>
                    <Tab
                        width="134px"
                        borderRadius="10px"
                        _selected={{ color: "white", backgroundColor: "#9234EA" }}
                    >
                        Notification
                    </Tab>
                </TabList>
            </Tabs>
        </Flex>
    );
};

export default Header;