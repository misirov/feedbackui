import {FaTimes} from 'react-icons/fa'
import PropTypes from 'prop-types';
import Card from "./shared/Card"


const Feedback = ({item, handleDelete}) => {
    // Whatever Card wraps, it's called children and can be passed as a prop for Card.




    return (
        <Card reverseColor={false}>

            <div className='rating'>
                {item.rating}
            </div>

            <button className='close' onClick={() => handleDelete(item.id)}>
                <FaTimes color='purple'/>
            </button>

            <div className='comment'>
                {item.text}
            </div>

        </Card>
    )
}



Feedback.propTypes = {
    item: PropTypes.object.isRequired
}

export default Feedback
