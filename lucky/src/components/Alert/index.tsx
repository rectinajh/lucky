import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert, { Color } from '@material-ui/lab/Alert';

interface Props {
    type?: Color;
    text: string;
    onClose(): void;
    duration?: number;
}

export default function CustomAlert({
    type = 'success',
    text,
    onClose,
    duration = 3000,
}: Props) {
    return (
        <Snackbar
            open={true}
            autoHideDuration={duration}
            key="global-alert"
            onClose={onClose}
        >
            <Alert
                elevation={6}
                variant="filled"
                onClose={onClose}
                severity={type}
            >
                {text}
            </Alert>
        </Snackbar>
    );
}
