import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

//uuid gives as a random ID
import Header from './component/Header';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './component/FeedbackList';
import FeedBackstat from './component/FeedBackstat';
import FeedBackForm from './component/FeedBackForm';

import './App.css';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  // console.log(FeedbackData);
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure to want to Delete it ?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4;
    setFeedback([newFeedback, ...feedback]);
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedBackForm handleAdd={addFeedback} />
        <FeedBackstat feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
