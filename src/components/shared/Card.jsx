
import PropTypes from 'prop-types';

const Card = ({children, reverseColor}) => {
    // Children are the elements which Card wraps:
    // <Card reverseColor={true}>
    //     <div className="">
    //         <p>Children element</p>
    //     </div>
    // </Card>

    // Example of conditional className:
        // return (
        //     <div className={`review-card ${reverseColor && 'reverse'}`}>
        //         {children}
        //     </div>
        // )

    // Example of conditional styling:
    return (
        <div className='feedback-card card' style={{
            backgroundColor: reverseColor ? 'black' : 'white',
            color: reverseColor ? 'white' : 'black'
        }} >
            {children}
        </div>
    )
}



Card.defaultProps = {
    reverseColor:false,
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverseColor: PropTypes.bool
}
export default Card
