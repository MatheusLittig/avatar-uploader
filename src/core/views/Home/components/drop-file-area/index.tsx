import { useHomeContext } from '@/core/contexts';
import { AreaWrapper, FileInput, AvatarImg } from './styles';
import { FiImage } from 'react-icons/fi';

export const DropFileArea = () => {
  const { onChangePic, avatarPic } = useHomeContext();

  return (
    <AreaWrapper>
      <FileInput
        type="file"
        accept="image/png, image/svg, image/jpg"
        style={{ cursor: 'pointer' }}
        onChange={e => onChangePic(e)}
      />
      {avatarPic.src !== '' && (
        <AvatarImg src={avatarPic.src} alt={avatarPic.alt} />
      )}

      <div>
        <span>
          <FiImage /> Organization Logo
        </span>

        <p>Drop the image here or click to browse.</p>
      </div>
    </AreaWrapper>
  );
};
