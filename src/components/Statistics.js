import PropTypes from 'prop-types';

import { Box } from 'styles';

export const Statistics = ({
  good,
  neutral,
  bad,
  total = 0,
  positivePercentage = 0,
}) => (
  <Box as="ul" width="300px">
    <Box as="li" display="flex" justifyContent="space-between">
      <span>Good:</span>
      <span>{good}</span>
    </Box>
    <Box as="li" display="flex" justifyContent="space-between">
      <span>Neutral:</span>
      <span>{neutral}</span>
    </Box>
    <Box as="li" display="flex" justifyContent="space-between">
      <span>Bad:</span>
      <span>{bad}</span>
    </Box>
    <Box as="li" display="flex" justifyContent="space-between">
      <span>Total:</span>
      <span>{total}</span>
    </Box>
    <Box as="li" display="flex" justifyContent="space-between">
      <span>Positive feedback:</span>
      <span>{positivePercentage}%</span>
    </Box>
  </Box>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
