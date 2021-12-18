import { createContext, Dispatch, useContext, useState } from 'react';

type AvatarPic = {
  src: string;
  alt: string;
  size: number[];
};

interface HomeContextData {
  avatarPic: AvatarPic;
  error: boolean;
  setAvatarPic: Dispatch<AvatarPic>;
  onChangePic(event: any): void;
}

export const HomeContext = createContext({} as HomeContextData);

export const HomeProvider: React.FC = ({ children }) => {
  const [avatarPic, setAvatarPic] = useState({
    src: '',
    alt: '',
    size: [0],
  });
  const [error, setError] = useState(false);

  function onChangePic(event: any) {
    const [file]: any = event.target.files;
    if (
      file.name.slice(file.name.length - 4) !== ('.png' || '.svg' || '.jpg')
    ) {
      return setError(true);
    }
    if (file) {
      setAvatarPic({
        src: URL.createObjectURL(file),
        alt: file.name,
        size: [100],
      });
      return setError(false);
    }
  }

  return (
    <HomeContext.Provider
      value={{
        avatarPic,
        error,
        setAvatarPic,
        onChangePic,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export const useHomeContext = () => {
  const context = useContext(HomeContext);

  if (!context) {
    throw new Error('useHomeContext must be used within a HomeProvider');
  }

  return context;
};
