import moment from "moment";
import { motion } from "framer-motion"

function NoteComponent({ item }) {
    const dateAgo = moment(item?.createdAt).format("D MMMM YYYY");
    const timeAgo = moment(item?.createdAt).format("LT");

    return (
        <div >
            {item?.map((item, id) => (
                <motion.div key={id} initial={{ opacity: 0, x: "-100%" }} whileInView={{ opacity: 1, x: 0 }}
                    style={{
                        backgroundColor: "white", color: "black", borderRadius: "5px", padding: "0.5rem 1rem 0.5rem 1rem",
                        margin: " 2rem 0 0 2rem", width: "90%"
                    }} className='shadow-lg'>
                    <div className=''>
                        {item.content}
                        <div className='mt-2 text-right'>
                            {dateAgo} <span>&#8226;</span> {timeAgo}
                        </div>
                    </div>
                </motion.div>))}
        </div>
    )
}

export default NoteComponent;