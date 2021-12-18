import { styled } from '@stitches/react';

export const AreaWrapper = styled('div', {
  width: '550px',
  height: '180px',
  borderRadius: '10px',
  position: 'relative',

  background: '$low_gray',
  border: '3px dashed $gray',
});

export const FileInput = styled('input', {
  opacity: 0,
  position: 'absolute',
  width: '550px',
  height: '180px',
  top: '0',
  left: '0',
});
