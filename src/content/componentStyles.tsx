import {Paper} from "@mui/material";
import {Children} from "react";
import { MyPaper } from "./commonStyles";

export const ComponentA = (props:any) => {
    return <div>{props.header}</div>;
};
type Props = {
    children?: JSX.Element | JSX.Element[];
};

export const RaisedPaper = ({children}:Props) => <MyPaper elevation={10}>{children}</MyPaper>;
export const RaisedPaperCode = ({children}:Props) => <MyPaper elevation={10}><pre>{children}</pre></MyPaper>;
