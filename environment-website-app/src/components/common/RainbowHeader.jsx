import PropTypes from 'prop-types';

function RainbowHeader ({ text }) {
  // Array of rainbow colors
  const rainbowColors = ['#FFB6C1', '#FFD700', '#FFA07A', '#98FB98', '#ADD8E6', '#DA70D6', '#FFDEAE'];

  return (
    <h1>
      {text.split('').map((letter, index) => (
        <span key={index} style={{ color: rainbowColors[index % rainbowColors.length] }}>{letter}</span>
      ))}
    </h1>
  );
}

RainbowHeader.propTypes = {
    text: PropTypes.string.isRequired
  };

export default RainbowHeader;
