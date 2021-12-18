import { IconButton } from '@/components/elements';
import { useHomeContext } from '@/core/contexts';
import { FiX } from 'react-icons/fi';

export const ResetButton = () => {
  const { resetContext } = useHomeContext();

  return (
    <IconButton
      type="transparent"
      style={{ position: 'absolute', top: 20, right: 20 }}
      onClick={resetContext}
    >
      <FiX />
    </IconButton>
  );
};
