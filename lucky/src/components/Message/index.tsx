import React, { useEffect } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

interface Props {
    isError?: boolean;
    closeError?(): void;
    errorMessage?: string;
    isSuccess?: boolean;
    closeSuccess?(): void;
    successMessage?: string;
    isInfo?: boolean;
    infoMessage?: string;
    closeInfo?(): void;
}

export default function Message(props: Props) {
    const {
        isError,
        closeError,
        errorMessage,
        isSuccess,
        closeSuccess,
        successMessage,
        isInfo,
        infoMessage,
        closeInfo,
    } = props;

    function onCloseError() {
        if (closeError) {
            closeError();
        }
    }

    function onCloseSuccess() {
        if (closeSuccess) {
            closeSuccess();
        }
    }

    function onCloseInfo() {
        if (closeInfo) {
            closeInfo();
        }
    }

    useEffect(() => {
        if (isError) {
            let timeout = setTimeout(() => {
                onCloseError();
            }, 5000);

            return () => clearTimeout(timeout);
        }
    }, [isError]);

    useEffect(() => {
        if (isSuccess) {
            let timeout = setTimeout(() => {
                onCloseSuccess();
            }, 5000);

            return () => clearTimeout(timeout);
        }
    }, [isSuccess]);

    useEffect(() => {
        if (isInfo) {
            let timeout = setTimeout(() => {
                onCloseInfo();
            }, 5000);

            return () => clearTimeout(timeout);
        }
    }, [isInfo]);

    return (
        <>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={isError}
                onClose={onCloseError}
            >
                <Alert severity="error" onClose={onCloseError}>
                    {errorMessage}
                </Alert>
            </Snackbar>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={isSuccess}
                onClose={onCloseSuccess}
            >
                <Alert severity="success" onClose={onCloseSuccess}>
                    {successMessage}
                </Alert>
            </Snackbar>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={isInfo}
                onClose={onCloseInfo}
            >
                <Alert severity="info" onClose={onCloseInfo}>
                    {infoMessage}
                </Alert>
            </Snackbar>
        </>
    );
}
