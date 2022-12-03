import PropTypes from 'prop-types';

import { Box } from 'styles';

export const Section = ({ title, children }) => (
  <Box as="section">
    <Box as="h2" textAlign="center" p="30px 0px">
      {title}
    </Box>
    {children}
  </Box>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
