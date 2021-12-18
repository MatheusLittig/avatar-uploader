import { Avatar, RangeSlider } from '@/components/elements';
import { PageTemplate } from '@/components/templates';
import { useHomeContext } from '@/core/contexts';
import { DropFileArea } from './components';

export const HomeView = () => {
  const { error, setAvatarPic, avatarPic } = useHomeContext();

  return (
    <PageTemplate title="Home">
      <DropFileArea />

      <Avatar src={avatarPic.src} size={`${avatarPic.size[0]}%`} />

      <RangeSlider
        step={0.1}
        min={0}
        max={200}
        values={avatarPic.size}
        onChange={values => setAvatarPic({ ...avatarPic, size: values })}
      />

      {error && <p style={{ color: 'red' }}>Invalid image</p>}
    </PageTemplate>
  );
};
