import { useState } from 'react';

import Header from './component/Header';
// import FeedbackItem from './component/FeedbackItem';
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
  return (
    <>
      <Header />
      <div className="container">
        <FeedBackForm />
        <FeedBackstat feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
