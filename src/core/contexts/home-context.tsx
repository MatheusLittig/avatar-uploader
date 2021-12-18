import { createContext, Dispatch, useContext, useState } from 'react';

type AvatarPic = {
  src: string;
  alt: string;
  size: number[];
};

type Steep = {
  steep_1: boolean;
  steep_2: boolean;
  steep_3: boolean;
  error: boolean;
};

type HomeContextData = {
  avatarPic: AvatarPic;
  steep: Steep;
  setAvatarPic: Dispatch<AvatarPic>;
  onChangePic(event: any): void;
};

export const HomeContext = createContext({} as HomeContextData);

export const HomeProvider: React.FC = ({ children }) => {
  const [avatarPic, setAvatarPic] = useState<AvatarPic>({
    src: '',
    alt: '',
    size: [0],
  });
  const [steep, setSteep] = useState<Steep>({
    steep_1: true,
    steep_2: false,
    steep_3: false,
    error: false,
  });

  function onChangePic(event: any) {
    const [file]: any = event.target.files;
    if (
      file.name.slice(file.name.length - 4) !== ('.png' || '.svg' || '.jpg')
    ) {
      return setSteep({ ...steep, steep_1: false, error: true });
    }
    if (file) {
      setAvatarPic({
        src: URL.createObjectURL(file),
        alt: file.name,
        size: [100],
      });
      return setSteep({ ...steep, steep_1: false, steep_2: true });
    }
  }

  return (
    <HomeContext.Provider
      value={{
        avatarPic,
        steep,
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
