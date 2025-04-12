import { PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { Theme, ThemeContext } from './use-theme';
import { getInitialTheme } from './get-initial-theme';

function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme());

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <meta
        name="theme-color"
        content={theme === 'dark' ? '#1e1e1e' : '#f5f5f7'}
      />
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
