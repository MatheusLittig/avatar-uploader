import { FiInfo } from 'react-icons/fi';
import { AvatarWrapper } from './styles';

interface AvatarProps {
  src?: string;
  size?: string | number;
  error?: boolean;
}

export const Avatar = ({ src, size, error }: AvatarProps) => {
  return (
    <AvatarWrapper bg={error ? 'error' : 'default'}>
      {error ? (
        <>
          <FiInfo style={{ fontSize: '24px' }} />
        </>
      ) : (
        <div
          id="avatar"
          style={{
            backgroundImage: `url(${src})`,
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: `${size}`,
          }}
        />
      )}
    </AvatarWrapper>
  );
};
