type AvatarProps = {
  src: string;
  size: string | number;
};

export const Avatar = ({ src, size }: AvatarProps) => {
  return (
    <div
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
  );
};
