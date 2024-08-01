import { Stack } from '@mui/material';
import GroupItem from './GroupItem';
import { memo } from 'react';
import AddIcon from '@mui/icons-material/Add';

const GroupList = ({ width = "100%", groupList, setIsOpen }) => {
    return (
        <div className='relative shadow-inner'>
            <Stack width={width} direction={"column"} height={"90%"} >
                {groupList.length === 0 ? (<Typography variant="body1" color={"#515159"} textAlign={"center"}>No groups are created till now</Typography>) : (groupList?.map((item, id) => <GroupItem key={id} item={item} />))}
            </Stack>
            <div className="bg-[#16008B] w-10 h-10 text-white rounded-full text-center duration-300 hover:duration-300 hover:scale-110 items-center sticky bottom-[12%] left-[72%]">
                <button onClick={() => setIsOpen(true)} ><AddIcon fontSize="large" /></button>
            </div>
        </div>

    )
}

export default memo(GroupList);
