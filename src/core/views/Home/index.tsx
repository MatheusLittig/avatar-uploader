import { PageTemplate } from '@/components/templates';
import { useHomeContext } from '@/core/contexts';
import { DropFileArea, ResizeArea } from './components';
import { ContentArea, ContentAreaWrapper } from './styles';

export const HomeView = () => {
  const { steep } = useHomeContext();

  return (
    <PageTemplate title="Home">
      <ContentArea>
        {steep.steep_1 && <DropFileArea />}

        {(steep.steep_2 || steep.error) && (
          <ContentAreaWrapper>
            {steep.steep_2 && <ResizeArea />}
            {steep.error && <p style={{ color: 'red' }}>Invalid image</p>}
          </ContentAreaWrapper>
        )}
      </ContentArea>
    </PageTemplate>
  );
};
