import {makeStyles} from "@mui/material";

import {palette} from "./helpers";

const drawerWidth = 240;

// makeStyles is obsolete and could probably be replaced. I took this code from another project https://smartdevpreneur.com/material-ui-sx-prop/
const styles = makeStyles((theme:any) => ({
    root: {
        display: 'flex',
        flexGrow: 1
    },
    nested: { paddingLeft: theme.spacing(4) },
    appBar: {
        backgroundColor: palette.headerbg,
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    rightDrawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    userPanelAvatar: {
        width: '150px',
        height: '150px',
        margin: 'auto'
    },
    userPanelInfo: {
        marginTop: theme.spacing(0.5),
        marginBottom: theme.spacing(0.5),
        color: palette.white,
        paddingTop: theme.spacing(0.35),
        paddingBottom: theme.spacing(0.35),
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        borderRadius: '4px',
        fontWeight: 'bold',
        float: "right"
    },
    userPanelTitles: {
        textAlign: 'center',
        fontWeight: "bold"
    },
    assistiveModeLabel: {
        fontSize: '11px',
        margin: 0,
        color: palette.white,
        paddingTop: theme.spacing(0.35),
        paddingBottom: theme.spacing(0.35),
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        borderRadius: '4px',
        backgroundColor: palette.warning,
        textAlign: 'center',
        width: '90px'
    }
}));

export default styles;