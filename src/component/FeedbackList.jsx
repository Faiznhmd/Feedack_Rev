import FeedbackItem from './FeedbackItem';
// import FeedbackContext from '../context/FeedbackContext';
// import { useContext } from 'react';

const FeedbackList = ({ handleDelete, feedback }) => {
  // const { feedback } = useContext(FeedbackContext);
  if (!feedback || feedback.length === 0) {
    return (
      <p style={{ fontSize: '60px', alignItems: 'center' }}>No Feedback Yet</p>
    );
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default FeedbackList;
