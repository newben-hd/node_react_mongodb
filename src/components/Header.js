import PropTypes from 'prop-types';
import React from 'react';

const Header = (msg) => {
  return (
    <h2 className='text-center Header'>
    React Component! Message: {msg.message}
    </h2>
  );
};

Header.propTypes = {
  message: PropTypes.string.isRequired
};

Header.defaultProps = {
  message: 'Default props for header content'
};

export default Header;