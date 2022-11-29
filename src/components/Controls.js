import React from 'react';
import { Box } from './Box';

export const Controls = ({ onLeaveFeedback }) => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="space-around"
    width="400px"
  >
    <button type="button" onClick={onLeaveFeedback} name="good">
      Good
    </button>
    <button type="button" onClick={onLeaveFeedback} name="neutral">
      Neutral
    </button>
    <button type="button" onClick={onLeaveFeedback} name="bad">
      Bad
    </button>
  </Box>
);
