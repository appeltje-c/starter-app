import React from 'react';
import theme from "@styles";
import {ThemeProvider, CssBaseline} from "@mui/material";
import TopBar from "@components/layout/TopBar";
import BottomMenu from "@components/layout/BottomMenu";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <TopBar/>
                <BottomMenu/>
            </CssBaseline>
        </ThemeProvider>
    );
}

export default App;
