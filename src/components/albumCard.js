import React from 'react';
import { PseudoBox, Box } from '@chakra-ui/core';

export default function AlbumCard({ title }) {
    return (
        <PseudoBox
            maxW="sm"
            borderWidth={"1px"}
            rounded="lg"
            overflow="hidden"
            mb={6}
            mr={4}
            bg="white"
            _hover={{ bg: "gray.50" }}
        >
            <Box p="6">
                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                    {title}
                </Box>
            </Box>
        </PseudoBox>
    )
}
