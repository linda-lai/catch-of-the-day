import React from 'react';
import PropTypes from 'prop-types';

// STATELESS FUNCTIONAL COMPONENT
const Header = (props) => (
    <header className="top">
      <h1>
        Catch
        <span className="ofThe">
          <span className="of">Of</span>
          <span className="the">The</span>
        </span>
        Day
      </h1>
      <h3 className="tagline">
        <span>{props.tagline}</span>
      </h3>
  </header>
);

// VALIDATIONS USING PROP TYPES
Header.propTypes = {
  tagline: PropTypes.string.isRequired
}

export default Header;

// // REACT CLASS COMPONENT
// class Header extends React.Component {
//   render() {
//     return(
//       <header className="top">
//         <h1>Catch of the Day!</h1>
//         <h3 className="tagline">
//           <span>{this.props.tagline}</span>
//         </h3>
//       </header>
//     )
//   }
// }