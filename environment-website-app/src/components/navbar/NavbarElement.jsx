import '../../styles/navbar/NavbarElement.css'
import PropTypes from 'prop-types';

function NavbarElement( { link , text } ) {
  return (
    <a href={ link }>
      { text }
    </a>
  )
}

NavbarElement.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  };

export default NavbarElement