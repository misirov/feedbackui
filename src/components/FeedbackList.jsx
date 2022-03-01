import {motion, AnimatePresence} from 'framer-motion'; // elements animation library

import PropTypes from 'prop-types';
import React from 'react'
import Feedback from './Feedback'


const ReviewList = ({feedback, handleDelete}) => {
        
    // Without items add / remove fadeout animations:
        // return (
        //     <div className='review-list'>
        //         {feedback.map((item) => (
        //             <div>
        //                 <Feedback key={item.id} item={item} handleDelete={handleDelete}/>
        //             </div>
        //         ))}
        //     </div>
        // )

    return (
        <div className='feedback-list'>
            <AnimatePresence> 
                {feedback.map((item) => (
                    <motion.div key={item.id} 
                        initial={{opacity:0}} 
                        animate={{opacity:1}} 
                        exit={{opacity:0}}>
                    
                        <Feedback key={item.id} item={item} handleDelete={handleDelete}/>
                    
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
}





ReviewList.propTypes = {
    feedback: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
    }))
}

export default ReviewList
