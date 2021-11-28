import {createTheme, Paper} from "@mui/material";
import React from "react";
import styled from "styled-components";

/*
Have a look at this. It talks about setting up MUI to use styled-components. I don't think that we can currently use styled-components with MUI components.
https://mui.com/guides/interoperability/#styled-components

 */

export const SmallP = styled.div`
  font-size:5pt;
  color:red;
`;

export const SmallPre = styled.pre`
  font-size:10pt;
  height:200px;
  display:block;
  overflow:scroll;
  width:80%;
  background-color:white;
  color:black;
`;

// export const MyPaper = styled(Paper)(() => ({
//     fontSize:"10pt",
//     height:"200px",
//     width:"80%",
//     overflow:"scroll"
// }));

// Another way to do it with styled. 
export const MyPaper = styled(Paper)`
    font-size:10pt;
    overflow:scroll;
    height:400px;
    width:80%;
    margin-top:2em;
`;


    
export const StyledPaper = styled(Paper)(() => ({
    fontSize:"10pt",
    height:"200px",
    width:"80%",
    overflow:"scroll",
    elevation:"24",
    // backgroundColor: "black",
    // "& > div": {
    //     padding: 4,
    //     display: "flex",
    //     marginBottom: 1,
    //     "& .MuiCard-root": {
    //         display: "inline-block",
    //         padding: 2,
    //         color: "#3c44b1"
    //     },
    //     "& > div": {
    //         paddingLeft: 4,
    //         "& .MuiTypography-subtitle2": {
    //             opacity: "0.6"
    //         }
    //     }
    //}
}));

// https://stackoverflow.com/a/69869472/494635
// Keep this around because it's cool. Shows how to hook into a theme. 
export const StyledPaperComplex = styled(Paper)(({ theme = createTheme() }) => ({
    backgroundColor: "#fdfdff",
    "& > div": {
        padding: theme.spacing(4),
        display: "flex",
        marginBottom: theme.spacing(1),
        "& .MuiCard-root": {
            display: "inline-block",
            padding: theme.spacing(2),
            color: "#3c44b1"
        },
        "& > div": {
            paddingLeft: theme.spacing(4),
            "& .MuiTypography-subtitle2": {
                opacity: "0.6"
            }
        }
    }
}));

