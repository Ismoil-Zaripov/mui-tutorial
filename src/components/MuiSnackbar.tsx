import {Alert, AlertProps, Button, Snackbar} from "@mui/material";
import React, {forwardRef, useState} from "react";

export const MuiSnackbar = () => {

    const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
        function SnackbarAlert(props, ref){
            return <Alert elevation={6} ref={ref} {...props} />
        }
    )
    const [open, setOpen] = useState(false)
    const handleClose = (
        _event: React.SyntheticEvent | Event,
        reason: string
    )=> {
        if (reason === 'clickaway') return;
        setOpen(false)
    }

    return (
        <>
            <Button onClick={()=> setOpen(true)}>Submit</Button>
            {/*<Snackbar
                message={'Form submitted successfully'}
                autoHideDuration={4000}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
            ></Snackbar>*/}
            <Snackbar autoHideDuration={4000} open={open} onClose={handleClose}>
                <SnackbarAlert
                    // onClose={handleClose}
                    severity={'success'}
                >
                    Form submitted successfully
                </SnackbarAlert>
            </Snackbar>
        </>
    );
}