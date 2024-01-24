import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AccountIcon from '@mui/icons-material/AccountCircle';
import {Box, AppBar, Toolbar, IconButton, Typography} from "@mui/material";

function TopBar() {

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton sx={{mr: 2}}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Appeltje-C
                    </Typography>
                    <IconButton>
                        <AccountIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default TopBar
