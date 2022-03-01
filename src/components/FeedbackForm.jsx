import {useState} from 'react';
import Card from "./shared/Card";
import Button from './shared/Button';
import RatingSelect from './RatingSelect';


const FeedbackForm = ({handleAdd}) => {

    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('')
  
    // onChange used in input forms automatically update the state each time there is a change
    // Real time state change, user types letter = automatic change.
    // this function fires off each time something is typed inside the input.
    const handleTextChange = (event) => {
        // log each word typed: console.log(event.target.value);
        
        setText(event.target.value)
        if(text.trim().length + 1 >= 10){ //if text is bigger than 10 chars, enable button and remove message
            setBtnDisabled(false);
            setMessage('');
           
        } else {
            setBtnDisabled(true);
            console.log('no bueno, text must have more than 10 characters');
            setMessage('Text must be at least 10 characters.')
        }        
    }

    // handle Form submit
    const handleSubmit = (e) => {
        e.preventDefault(); // prevent form from submitting to the actual file

        if(text.trim().length > 10) { // double check characters
            const newFeedback = {
                text: text, 
                rating: rating,
            }
            handleAdd(newFeedback);
            setText("") 
        }
    }


    return (
        <Card>
            <form className='feedback-form' onSubmit={handleSubmit}>
                <h2>How would you rate your experience with us?</h2>

                <RatingSelect select={(rating) => setRating(rating) }/>

                <div className="input-group">
                    <input type="text" placeholder="write your review" onChange={handleTextChange} value={text}/>
                    <Button type="submit" version='primary' isDisabled={btnDisabled}>Submit</Button>
                </div>

                <div className='message'>{message}</div>

            </form>
        
        </Card>
    )
}

export default FeedbackForm
