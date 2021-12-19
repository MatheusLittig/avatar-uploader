import { styled } from '@stitches/react';

export const AreaWrapper = styled('div', {
  width: '550px',
  height: '180px',
  borderRadius: '10px',
  position: 'relative',

  background: '$low_gray',
  border: '3px dashed $gray',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  gap: '50px',

  div: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    span: {
      fontWeight: '500',
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
    },
  },
});

export const FileInput = styled('input', {
  opacity: 0,
  position: 'absolute',
  width: '550px',
  height: '180px',
  top: '0',
  left: '0',
});

export const AvatarImg = styled('img', {
  borderRadius: '50%',
});
