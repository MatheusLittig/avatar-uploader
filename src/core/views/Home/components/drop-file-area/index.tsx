import { useHomeContext } from '@/core/contexts';
import { AreaWrapper, FileInput } from './styles';

export const DropFileArea = () => {
  const { onChangePic } = useHomeContext();

  return (
    <AreaWrapper>
      <FileInput
        type="file"
        accept="image/png, image/svg, image/jpg"
        onChange={e => onChangePic(e)}
      />
    </AreaWrapper>
  );
};
