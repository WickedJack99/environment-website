import '../../styles/navbar/MainNavbar.css'
import NavbarElement from './NavbarElement'
import PropTypes from 'prop-types';

function MainNavbar( { linkToLogo, pageName, elements } ) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href={ linkToLogo }></a>
      </div>
      <div className="navbar-name">
        { pageName }
      </div>
      <ul className="navbar-links">
        {elements.map((element, index) => (
            <li key={index}>
                <NavbarElement link={element.link} text={element.text} />
            </li>
        ))}
      </ul>
    </nav>
  )
}

MainNavbar.propTypes = {
    linkToLogo: PropTypes.string.isRequired,
    pageName: PropTypes.string.isRequired,
    elements: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
      })
    ).isRequired
  };

export default MainNavbar