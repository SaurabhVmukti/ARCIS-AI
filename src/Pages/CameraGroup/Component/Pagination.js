import React from 'react';
import { Button, Flex } from '@chakra-ui/react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <Flex justifyContent="center" alignItems="center">
            <Flex justifyContent="center" alignItems="center" mt={4} gap={0} width={"max-content"} borderRadius={"10px"} border={"1px solid #9234EA"}>
                <Button
                    onClick={() => onPageChange(currentPage - 1)}
                    isDisabled={currentPage === 1}
                    // variant="outline" 
                    bg={"transparent"}
                    size="sm"
                >
                    &lt; Previous
                </Button>
                |

                {Array.from({ length: totalPages }, (_, index) => (
                    <Button
                        key={index + 1}
                        onClick={() => onPageChange(index + 1)}
                        size="sm"
                        // variant={currentPage === index + 1 ? "solid" : "outline"}
                        bg={currentPage === index + 1 ? "gray.500" : "transparent"}
                        color={currentPage === index + 1 ? "white" : "black"}
                        _hover={{ bg: "gray.300" }}
                    >
                        {index + 1}
                    </Button>
                ))}
|
                <Button
                    onClick={() => onPageChange(currentPage + 1)}
                    isDisabled={currentPage === totalPages}
                    // variant="outline" 
                    size="sm"
                    borderRadius={"2px"}
                    bg={"transparent"}
                >
                    Next &gt;
                </Button>
            </Flex>
        </Flex>
    );
};

export default Pagination;
