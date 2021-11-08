import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <section className="Statistics">
      <h2>Statistics</h2>
      <ul className="statistics_list">
        <li>
          <p>Good: {good}</p>
        </li>
        <li>
          <p>Neutral: {neutral}</p>
        </li>
        <li>
          <p>Bad: {bad}</p>
        </li>
        <li>
          <p>Total: {total} </p>
        </li>
        <li>
          <p>Positive feedback: {positive}%</p>
        </li>
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  total: 0,
  positive: 0,
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positive: PropTypes.number,
};

export default Statistics;
