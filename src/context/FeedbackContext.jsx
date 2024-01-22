import { createContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This is a Random Text from context',
      rating: 7,
    },
    {
      id: 2,
      text: 'This is a Random Text from context',
      rating: 6,
    },
    {
      id: 3,
      text: 'This is a Random Text from context',
      rating: 5,
    },
  ]);
  // console.log(feedback);

  return (
    <FeedbackContext.Provider value={{ feedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
