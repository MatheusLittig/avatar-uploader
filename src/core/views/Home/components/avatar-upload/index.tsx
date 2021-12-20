import { useHomeContext } from '@/core/contexts';
import { DropFileArea, ErrorArea, ResetButton, ResizeArea } from '../';
import { Wrapper, ContentAreaWrapper } from './style';

export const AvatarUpload = () => {
  const { steep } = useHomeContext();

  return (
    <Wrapper>
      {steep.steep_1 && <DropFileArea />}

      {(steep.steep_2 || steep.error) && (
        <ContentAreaWrapper>
          <ResetButton />
          {steep.steep_2 && <ResizeArea />}
          {steep.error && <ErrorArea />}
        </ContentAreaWrapper>
      )}
    </Wrapper>
  );
};
