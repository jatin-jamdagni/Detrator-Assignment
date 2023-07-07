"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { BorderLeft } from '@mui/icons-material';

const list = ["Home", "Search", "Post", "Live"]
const SideBar = () => {
    return (

        <nav style={{ height: '100vh', maxWidth: 360, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <List>
                {list.map((item, index) =>
                (<ListItem key={index}>
                    <ListItemButton>
                        <ListItemText primary={item} />
                    </ListItemButton>
                </ListItem>
                ))
                }
            </List>
            <List>
                <ListItem>
                    <ListItemButton>
                        <ListItemText primary="LogOut" />
                    </ListItemButton>
                </ListItem>
            </List>
        </nav>

    )
}

export default SideBar;