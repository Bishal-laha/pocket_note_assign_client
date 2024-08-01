import { Typography, Box } from "@mui/material";
import { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "../constants/styles.jsx";
import { getInitial } from '../constants/feature.js';

function GroupItem({ item }) {
    if (!item || !item.groupName) return null;
    const initial = getInitial(item.groupName);

    return (
        <div className='-mt-5'>
            <Link to={`/group/${item?._id}`}>
                <motion.div initial={{ opacity: 0, y: "-100%" }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * 1 }} style={{ display: "flex", gap: "1rem", alignItems: "center", position: "relative", padding: "0.8rem", width: "90%", margin: "auto", borderRadius: "10px", transitionDuration: "300ms" }}>
                    <Box className="flex gap-5 justify-center items-center">
                        <div className={`${item?.groupColor} w-10 h-10 rounded-full cursor-pointer text-white font-bold flex justify-center items-center`}>{initial}</div>
                        <Typography fontSize={"1.3rem"} fontWeight="bold">{item.groupName}</Typography>
                    </Box>
                </motion.div>
            </Link >
        </div>
    )
}

export default memo(GroupItem);
