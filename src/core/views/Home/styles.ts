import { styled } from '@stitches/react';

export const ContentArea = styled('div', {
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const ContentAreaWrapper = styled('div', {
  width: '550px',
  height: '180px',
  padding: '20px',
  borderRadius: '10px',
  position: 'relative',

  background: '$low_gray',

  display: 'flex',
  alignItems: 'center',
  gap: '30px',
});
