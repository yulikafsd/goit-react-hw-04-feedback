import { Box } from 'styles';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Box display="flex" alignItems="center" justifyContent="space-between">
    <Box as="button" variant="good" type="button" onClick={onLeaveFeedback}>
      Good
    </Box>
    <Box as="button" variant="neutral" type="button" onClick={onLeaveFeedback}>
      Neutral
    </Box>
    <Box as="button" variant="bad" type="button" onClick={onLeaveFeedback}>
      Bad
    </Box>
  </Box>
);
