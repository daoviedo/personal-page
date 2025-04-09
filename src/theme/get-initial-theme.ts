import { Theme } from './use-theme';

export const getInitialTheme = (): Theme => {
  const storedTheme: string | null = localStorage.getItem('theme');
  const defaultBrowser: Theme = window?.matchMedia(
    '(prefers-color-scheme: dark)'
  )?.matches
    ? 'dark'
    : 'light';
  return storedTheme === 'light' || storedTheme === 'dark'
    ? storedTheme
    : defaultBrowser;
};
