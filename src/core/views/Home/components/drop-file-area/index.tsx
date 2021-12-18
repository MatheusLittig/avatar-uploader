import { useHomeContext } from '@/core/contexts';
import { AreaWrapper, FileInput } from './styles';
import { FiImage } from 'react-icons/fi';

export const DropFileArea = () => {
  const { onChangePic } = useHomeContext();

  return (
    <AreaWrapper>
      <FileInput
        type="file"
        accept="image/png, image/svg, image/jpg"
        onChange={e => onChangePic(e)}
      />
      <span>
        <FiImage /> Organization Logo
      </span>

      <p>Drop the image here or click to browse.</p>
    </AreaWrapper>
  );
};
