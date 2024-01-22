import FeedbackItem from './FeedbackItem';

const FeedbackList = ({ feedback, handleDelete }) => {
  // console.log(feedback);

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
