import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { selectErrorMessage } from '../redux/selector';
import { useToast } from '@chakra-ui/core';

function ErrorToast({ errorMessage }) {
    const toast = useToast();

    useEffect(() => {
        if (errorMessage) {
            toast({
                title: 'An error occurred.',
                description: errorMessage,
                status: 'error',
                duration: 9000,
                isClosable: true,
            });
        }
    }, [errorMessage]);

    return <></>;
}

const mapStateToProps = (state) => ({
    errorMessage: selectErrorMessage(state),
});

export default connect(mapStateToProps)(ErrorToast);
