import { render } from '@testing-library/react';
import serializer from 'jest-stitches';
import { Button } from '.';

expect.addSnapshotSerializer(serializer);

describe('Button component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Button>Save</Button>);

    expect(getByText('Save')).toBeInTheDocument();
  });
});
