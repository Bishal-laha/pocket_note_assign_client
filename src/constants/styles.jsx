import { Link as LinkRouter } from "react-router-dom";
import { styled } from '@mui/material';

export const Link = styled(LinkRouter)`
    text-decoration:none;
    border-radius:10px;
    margin:0.5rem;
    transition-duration:300ms;
    &:active{
        background-color:rgba(0,0,0,0.9);
        transition-duration:300ms;
    }
`;

export const ChatInputBox = styled("input")`
    width: 100%;
    height: 100%;
    border: none;
    outline : none;
    padding: 1.4rem 3rem;
    border-radius : 1.5rem;
    margin:0 0 0 8px;
    background-color: rgba(247,247,247,1);
`;
