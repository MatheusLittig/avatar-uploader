import { styled } from '@stitches/react';

export const ResizeAreaWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',

  gap: '30px',

  div: {
    display: 'flex',
    flexDirection: 'column',

    gap: '15px',
  },
});
