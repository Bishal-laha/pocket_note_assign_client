import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useState } from 'react';
import toast from "react-hot-toast"
import axios from 'axios';
import { color_data } from "../constants/constant.js";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogBox({ isOpen, setIsOpen, setGroupList }) {
    const [activeColor, setActiveColor] = useState(null);
    const [newGroupName, setNewGroupName] = useState("");

    const handleCreate = async () => {
        if (newGroupName === "" || activeColor === null)
            toast.error("Fill In The Details");
        try {
            const response = await axios.post(`${import.meta.env.VITE_SERVER}/create-group`, { groupName: newGroupName, groupColor: activeColor });
            setGroupList((prev) => [...prev, response.data.data]);
            toast.success("Group is created");
            setActiveColor(null);
            setNewGroupName("");
            setIsOpen(false);
        } catch (error) {
            toast.error("Something went wrong while creating groups", error.message);
        }
    };

    return (
        <React.Fragment>
            <Dialog open={isOpen} TransitionComponent={Transition} keepMounted
                onClose={() => setIsOpen(false)} aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>Create New Group</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">Group Name</DialogContentText>
                    <input className='outline-none p-2 w-full rounded-lg border border-1 border-black mt-3 mb-3' placeholder='Enter Group Name' autoFocus value={newGroupName} onChange={(e) => setNewGroupName(e.target.value)} />
                    <DialogContentText id="alert-dialog-slide-description">Choose Color</DialogContentText>
                    <div className='flex justify-center items-center gap-2 mt-3'>
                        {color_data.map((item, id) => (<div key={id} className={`${item} w-10 h-10 rounded-full cursor-pointer  ${activeColor === item ? "border-2 border-black" : ""}`} onClick={() => setActiveColor(item)} />))}
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setIsOpen(false)}>Cancel</Button>
                    <Button onClick={handleCreate}>Create</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}