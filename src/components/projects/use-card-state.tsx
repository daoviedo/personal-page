import { createContext, useContext } from 'react';

export const CardProviderContext = createContext({
  isClicked: false,
  toggleClicked: () => {},
});

export const useCardState = () => {
  return useContext(CardProviderContext);
};
