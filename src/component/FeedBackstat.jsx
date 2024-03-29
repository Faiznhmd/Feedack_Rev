// import FeedbackContext from '../context/FeedbackContext';
// import { useContext } from 'react';

const FeedBackstat = ({ feedback }) => {
  //Calculate Rating
  // const { feedback } = useContext(FeedbackContext);
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} : Reviews</h4>
      <h4>Average Rating: {average}</h4>
    </div>
  );
};

export default FeedBackstat;
