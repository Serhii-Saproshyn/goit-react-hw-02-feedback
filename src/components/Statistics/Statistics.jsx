import { PropTypes } from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positiveFeedbackPercentage,
}) => {
  return (
    <ul>
      <li className={css.good}>Good: {good}</li>
      <li className={css.neutral}>Neutral: {neutral}</li>
      <li className={css.bad}>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive Feedback: {positiveFeedbackPercentage}%</li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};
