import React from 'react';
import {AppBar, Stack, Toolbar, Typography} from '@mui/material';
import {grey} from "@mui/material/colors";

const AppFooter = () => {
    return (
        <AppBar position="fixed" color="primary"
                sx={{top: "initial", bottom: "0", background: "white", color: grey[600]}}>
            <Toolbar>
                <Stack sx={{width: "100%"}} alignItems="center" justifyContent="flex-end" direction="row" divider={
                    <Typography variant="body2" sx={{ mx: "4px" }}>|</Typography>
                }>
                    <Typography variant="body2" component="div">
                        All Rights Reserved
                    </Typography>
                    <Typography variant="body2" component="div" >
                        <a href="#">Terms and Conditions</a>
                    </Typography>
                    <Typography variant="body2" component="div">
                        <a href="#">Privacy Policy</a>
                    </Typography>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}

export default AppFooter;