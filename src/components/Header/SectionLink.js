import PropTypes from 'prop-types';
import React from 'react';
import Styles from './styles';

function SectionLink({ href, children }) {
  return (
    <Styles.StyledLink href={href} to={href}>
      {children}
    </Styles.StyledLink>
  );
}

SectionLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default SectionLink;
