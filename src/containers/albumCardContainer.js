import React from 'react';
import { Flex, CircularProgress } from "@chakra-ui/core";
import AlbumCard from '../components/albumCard';
import { useSelector } from 'react-redux';

export default function AlbumCardContainer() {
    const albumState = useSelector(state => state.album);

    return (
        albumState.isFetching ? <CircularProgress></CircularProgress> :
            <Flex wrap="wrap">
                {albumState.albums.map((album, index) =>
                    <AlbumCard
                        title={album.title}
                    />
                )}
            </Flex>
    )
}