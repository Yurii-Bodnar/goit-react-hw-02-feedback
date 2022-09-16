import PropTypes from 'prop-types';
const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positivePercentage,
  
}) => {
  return (
      <ul>
        <li>
          <p>Good:{good}</p>
        </li>
        <li>
          <p>Neutral:{neutral}</p>
        </li>
        <li>
          <p>bad:{bad}</p>
        </li>
        <li>
          <p>Total:{totalFeedback}</p>
        </li>
        <li>
          <p>Positive feedback:{positivePercentage}%</p>
        </li>
      </ul>
  );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    totalFeedback:PropTypes.number.isRequired,
    positivePercentage:PropTypes.number.isRequired,
}
export default Statistics;



