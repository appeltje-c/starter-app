import React, {useState} from 'react'
import HomeIcon from '@mui/icons-material/Home'
import PlaceIcon from '@mui/icons-material/Place'
import FavoriteIcon from '@mui/icons-material/Favorite'
import {BottomNavigation, BottomNavigationAction, Paper} from "@mui/material"

function BottomMenu() {

    const [value, setValue] = useState(0)

    return (
        <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}>
                <BottomNavigationAction label="Home" icon={<HomeIcon/>}/>
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon/>}/>
                <BottomNavigationAction label="Map" icon={<PlaceIcon/>}/>
            </BottomNavigation>
        </Paper>
    )
}

export default BottomMenu
