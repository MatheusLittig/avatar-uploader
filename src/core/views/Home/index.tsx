import { PageTemplate } from '@/components/templates';
import { useHomeContext } from '@/core/contexts';
import { DropFileArea, ErrorArea, ResetButton, ResizeArea } from './components';
import { ContentArea, ContentAreaWrapper } from './styles';

export const HomeView = () => {
  const { steep } = useHomeContext();

  return (
    <PageTemplate title="Home">
      <ContentArea>
        {steep.steep_1 && <DropFileArea />}

        {(steep.steep_2 || steep.error) && (
          <ContentAreaWrapper>
            <ResetButton />
            {steep.steep_2 && <ResizeArea />}
            {steep.error && <ErrorArea />}
          </ContentAreaWrapper>
        )}
      </ContentArea>
    </PageTemplate>
  );
};
