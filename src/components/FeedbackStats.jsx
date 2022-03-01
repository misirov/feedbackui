import PropTypes from 'prop-types';

const FeedbackStats = ({feedback}) => {

    // calculate feedback average
    let average = feedback.reduce((accumulator, current_value) => {
        return accumulator + current_value.rating;
    }, 0) / feedback.length;

    // Only display one decimal instead of 4.55555.. If number is 4.0 get rid of 0 with .replace regex
    average = average.toFixed(1).replace(/[.,]0$/, '') 

    return (
        <div className="feedback-stats">
            <h4 className="stats">{feedback.length} reviews</h4>
            <h4 className="stats">Average: {isNaN(average) ? "Not available" : average }</h4>

        </div>
    )
}

export default FeedbackStats

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired,
}