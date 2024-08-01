import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Drawer, Grid } from "@mui/material";
import GroupList from "../components/GroupList";
import DialogBox from "../components/DialogBox";
import axios from "axios";
import toast from "react-hot-toast";

const AppLayout = () => (WrapComponent) => {
    return () => {
        const [isOpen, setIsOpen] = useState(false);
        const [isMenuOpen, setIsMenuOpen] = useState(false);
        const [groupList, setGroupList] = useState([]);
        const isMobileScreen = useMediaQuery({ maxWidth: 600 });

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await axios.get(`${import.meta.env.VITE_SERVER}/all-group`);
                    setGroupList([...response?.data?.data]);
                } catch (error) {
                    // toast.error("Failed to load group list", error.message);
                }
            };

            fetchData();
        }, []);

        return (
            <>
                {isMobileScreen &&
                    <Drawer open={isMenuOpen} onClose={() => setIsMenuOpen(false)} PaperProps={{
                        sx: { width: '90%', height: '100vh', overflow: 'auto' }
                    }}>
                        <div className="relative">
                            <h1 className="font-semibold text-[2rem] text-center mb-5 mt-3">Pocket Notes</h1>
                            <div className=" h-[530px] overflow-y-auto relative">
                                <GroupList groupList={groupList} setIsOpen={setIsOpen} />
                            </div>
                        </div>
                    </Drawer>
                }

                <Grid container height={"100vh"} >
                    <Grid item sm={4} md={4} sx={{ display: { xs: "none", sm: "block" } }} className="" height={"100%"}>
                        <div className="relative">
                            <h1 className="font-semibold text-[2rem] text-center mb-5 mt-3">Pocket Notes</h1>
                            <div className=" h-[530px] overflow-y-auto relative">
                                <GroupList groupList={groupList} setIsOpen={setIsOpen} />
                            </div>
                        </div>
                        {isOpen && <DialogBox isOpen={isOpen} setIsOpen={setIsOpen} setGroupList={setGroupList} />}
                    </Grid>
                    <Grid item xs={12} sm={8} md={8} height={"100%"} className='bg-[#DAE5F5]'> <WrapComponent isMobileScreen={isMobileScreen} setIsMenuOpen={setIsMenuOpen} /></Grid>
                </Grid>
            </>
        )
    }
}
export default AppLayout;
