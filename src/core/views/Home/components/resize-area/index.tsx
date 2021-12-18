import { Avatar, RangeSlider } from '@/components/elements';
import { useHomeContext } from '@/core/contexts';
import { ResizeAreaWrapper } from './styles';

export const ResizeArea = () => {
  const { setAvatarPic, avatarPic } = useHomeContext();

  return (
    <ResizeAreaWrapper>
      <Avatar src={avatarPic.src} size={`${avatarPic.size[0]}%`} />

      <div>
        <p>Crop</p>
        <RangeSlider
          step={0.1}
          min={0}
          max={200}
          values={avatarPic.size}
          onChange={values => setAvatarPic({ ...avatarPic, size: values })}
        />
      </div>
    </ResizeAreaWrapper>
  );
};
