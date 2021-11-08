import PropTypes from "prop-types";

const Notification = ({ message }) => (
  <div className="notification">
    <p className="notification_message">{message}</p>
  </div>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired
}

export default Notification;
