import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="buttonBox">
      {options.map((option, i) => (
        <button className="btn" type="button" key={i} onClick={()=>onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.func
}

export default FeedbackOptions;
