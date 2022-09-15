const FeedbackBtn = ({handleFeedback}) => {
  return (
    <div>
      <button type="buttun" onClick={handleFeedback} name="good">good</button>
      <button type="buttun"onClick={handleFeedback} name="neutral">neutral</button>
      <button type="buttun"onClick={handleFeedback} name="bad">bad</button>
    </div>
  );
};

export default FeedbackBtn;
