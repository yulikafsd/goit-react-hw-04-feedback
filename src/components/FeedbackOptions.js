import PropTypes from 'prop-types';
import { Box } from 'styles';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Box display="flex" alignItems="center" justifyContent="space-between">
    {options.map(option => {
      const capitalisedOption =
        option.charAt(0).toUpperCase() + option.slice(1);
      return (
        <Box
          as="button"
          type="button"
          name={option}
          variant={option}
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {capitalisedOption}
        </Box>
      );
    })}
  </Box>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
