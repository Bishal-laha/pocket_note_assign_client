import AppLayout from '../layout/AppLayout'
import { Stack, IconButton, Typography, } from "@mui/material";
import { Send as SendIcon, KeyboardBackspace as KeyboardBackIcon } from "@mui/icons-material";
import { Fragment, useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import NoteComponent from '../components/NoteComponent';
import Header from '../layout/Header';
import { ChatInputBox } from '../constants/styles';
import toast from "react-hot-toast";
import axios from 'axios';

function NotePage() {
    const params = useParams();
    const groupId = params.groupId;
    const navigate = useNavigate();
    const [groupMessage, setGroupMessage] = useState();

    useEffect(() => {
        try {
            const fetchMessageData = async () => {
                const response = await axios.get(`${import.meta.env.VITE_SERVER}/get-group/${groupId}`);
                setGroupMessage(response?.data?.data?.groupMessages);
            }
            fetchMessageData();
        } catch (error) {
            toast.error("Failed to load group notes", error.message);
        }
    }, [groupId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const content = formData.get('content');
        if (!content) {
            toast.error("Please Enter Notes");
            return;
        }
        try {
            await axios.post(`${import.meta.env.VITE_SERVER}/store-note/${groupId}`, { content });
            setGroupMessage(prevMessages => [...prevMessages, { content }]);
            toast.success("Note is created");
            e.target.reset();
        } catch (error) {
            toast.error("Failed to create notes", error.message);
        }
    }

    return (
        <Fragment>
            <Header />
            <Stack height={"calc(100vh - 4rem)"}>
                <Stack boxSizing={"border-box"} position={"relative"} padding={"1rem"} spacing={"1rem"} height={"90%"} sx={{ overflowX: "hidden", overflowY: "auto" }}>
                    <IconButton sx={{ position: "absolute", top: "0.5rem", left: "0.5rem", padding: "0.4rem 0.4rem", bgcolor: "#1c1c1c", color: "white", ":hover": { bgcolor: "rgba(0,0,0,0.7)", } }} onClick={() => navigate(`/`)}><KeyboardBackIcon /></IconButton>
                    {groupMessage?.length === 0 ? (<Typography variant="body1" color={"#515159"} textAlign={"center"}>No Messages Till Now</Typography>) : (<NoteComponent item={groupMessage} />)}
                </Stack>
                <form style={{ height: "10%" }} onSubmit={handleSubmit}>
                    <Stack direction={"row"} height={"100%"} padding={"1rem"} alignItems={"center"} position={"relative"}>
                        <ChatInputBox placeholder="Enter your text here...." name='content' />
                        <IconButton type="submit" sx={{
                            rotate: "-30deg", bgcolor: "#464782", color: "white", padding: "0.5rem", marginLeft: "1rem", "&:hover": { bgcolor: "#3f3f6e" }
                        }}>
                            <SendIcon />
                        </IconButton>
                    </Stack>
                </form>
            </Stack>
        </Fragment>
    )
}

export default AppLayout()(NotePage)