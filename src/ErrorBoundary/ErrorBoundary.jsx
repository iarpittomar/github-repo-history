import {
    Alert,
    AlertIcon,
    Box,
    AlertTitle,
    AlertDescription,
    Flex,
} from '@chakra-ui/react';
import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <Flex
                    h='100vh'
                    w='100vw'
                    p={['2rem', '2rem', '4rem 8rem', '6rem 12rem']}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Alert status='error'>
                        <AlertIcon />
                        <Box>
                            <AlertTitle>Error!</AlertTitle>
                            <AlertDescription>
                                OOPS!, Your application has been crashed. Kindly reload the
                                website.
                            </AlertDescription>
                        </Box>
                    </Alert>
                </Flex>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
