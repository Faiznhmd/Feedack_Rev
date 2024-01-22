import Card from '../shared/Card';
import { useState } from 'react';

const FeedBackForm = () => {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  return (
    <Card>
      <form>
        <h2 style={{ fontWeight: '800' }}>
          How Would You Rate your service With Us?
        </h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={handleTextChange}
            value={text}
          />
          <button type="submit">Send </button>
        </div>
      </form>
    </Card>
  );
};

export default FeedBackForm;
