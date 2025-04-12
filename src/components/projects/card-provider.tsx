import { PropsWithChildren, useCallback, useState } from 'react';
import { CardProviderContext } from './use-card-state';

export const CardProvider = ({ children }: PropsWithChildren) => {
  const [isClicked, setClicked] = useState<boolean>(false);
  const toggleClicked = useCallback(() => {
    setClicked(prev => !prev);
  }, []);
  return (
    <CardProviderContext.Provider value={{ isClicked, toggleClicked }}>
      {children}
    </CardProviderContext.Provider>
  );
};
