import React from 'react';

import {Drawer} from "@mui/material";


const NavigationBar = () => {
        
return <Drawer
    variant="permanent"
    ModalProps={{
        keepMounted: true,
    }}
/>
}

export default NavigationBar