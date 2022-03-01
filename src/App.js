import {v4 as uuidv4} from 'uuid'; // uuid library generates unique id's
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'; // React router

import {useState, useEffect} from 'react';

import Header from './components/Header';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import About from './components/Pages/About';

import feedbackData from "./data.js";



function App() {

  const [feedback, setFeedback] = useState(feedbackData)


  const deleteFeedback = (id) =>{
    if(window.confirm('Are you sure you want to delete this item?')){      
      setFeedback(feedback.filter((item) => item.id != id))
      console.log('Deleted id:', id)
      console.log(feedback)
    }
  }


  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();

    // need to make a copy of all feedback available.
    // using spread operator to take all objects in feedback and put in a new array
    // set newFeedback + all current feedback items. Results in a list of objects
    setFeedback( [ newFeedback, ...feedback ] )
  }


  return (
      <Router>
        <Header/>
        <div className="app-container">
          <Routes>
            <Route path="/" element={
              <>
                <FeedbackForm handleAdd={addFeedback}/>,
                <FeedbackStats feedback={feedback} />,
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
              </>
            }/>

            <Route path="/about" element={
              <>
                <About/>
              </>  
            }/>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
