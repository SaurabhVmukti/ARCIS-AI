import { Button, Flex, Spacer } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import RightSideArrowImage from "../../../../Assets/Images/Camera-Group/RightSideArrow.svg"
import BackButtonImage from "../../../../Assets/Images/Video-Player/BackButton.svg"
import { HStack, Text } from "@chakra-ui/react";

function CameraNavigation() {
    return (
        <Flex pb={4} pr={4} alignItems="center" flexDir={'column'} width={'100%'} justifyContent={"end"}>
            <Flex alignItems={"center"} justifyContent={"space-between"} width={"100%"} >
                {/* Breadcrumb Navigation */}
                <Flex>
                    <HStack spacing={3} alignItems="center">
                        <Text fontWeight="bold" fontSize="20px">
                            Camera
                        </Text>
                        <img src={RightSideArrowImage} alt="right side arrow" />
                        <RouterLink color="#9234EA" fontSize="14px" fontWeight="semibold">
                            Grouping
                        </RouterLink>
                        <img src={RightSideArrowImage} alt="right side arrow" />
                        <RouterLink color="#9234EA" fontSize="14px" fontWeight="semibold">
                            Entry Gate no 11
                        </RouterLink>
                    </HStack>
                </Flex>

                <Spacer />

                {/* Back Button */}
                <RouterLink to="/camera-group" variant="link" size="lg" fontWeight={"bold"} color={"black"}  >
                <Flex alignItems="center">
                    <img src={BackButtonImage} alt="Back Button Icon" style={{ marginRight: "8px" }} />
                    Back
                    </Flex>
                </RouterLink>
            </Flex>

            <Flex  justifyContent={"flex-end"} width={"100%"} gap={3} mt={4}>

                {/* Next Device */}
                <Button variant="link" fontSize="14px" fontWeight={"400"} color={"#141E35"}>
                    Next Device
                </Button>
                <img src={RightSideArrowImage} alt="right side arrow" />
            </Flex>
        </Flex>
    );
}

export default CameraNavigation;