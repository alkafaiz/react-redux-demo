import React, { useEffect } from 'react';
import Layout from "../containers/layout";
import { Heading, Divider, Flex, Link } from "@chakra-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { loadAlbumPage } from '../features/album/album.action';
import AlbumCardContainer from '../containers/albumCardContainer';

export default function AlbumsPage() {
    useEffect(() => {
        document.title = 'Albums';
        console.log('loadAlbumPage');
        loadAlbumPage();
    }, [])

    return (
        <Layout>
            <Flex justifyContent="space-between" align="center">
                <Heading>Album Listing</Heading>
                <Link as={RouterLink} to="/">
                    Posts
                </Link>
                <Link as={RouterLink} to="/albums">
                    Albums
                </Link>
                <Link as={RouterLink} to="/users">
                    Users
                </Link>
            </Flex>
            <Divider my={8} />
            <AlbumCardContainer />
        </Layout>
    )
}
