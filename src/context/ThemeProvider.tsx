import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import {
  createTheme,
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material';
import { ReactNode, useEffect, useMemo } from 'react';
import theme from '@utils/theme';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mojtaba118/raui/Theme';

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const { i18n } = useTranslation();
  const { theme: rauiTheme } = useTheme();
  const dir = i18n.dir(i18n.resolvedLanguage);
  useEffect(() => {
    // document.body.style.direction = dir;
    document.documentElement.setAttribute('data-dir', dir);
  }, []);

  const cacheRtl = useMemo(
    () =>
      createCache({
        key: dir === 'rtl' ? 'muirtl' : 'muiltr',
        stylisPlugins: dir === 'rtl' ? [prefixer, rtlPlugin] : [],
      }),
    [i18n.language]
  );

  const dynamicTheme = useMemo(
    () =>
      createTheme({
        ...theme,
        colors: {
          secondary: {
            a4: '#fff',
            a8: '#fff',
            a12: '#fff',
            a16: '#fff',
            a24: '#fff',
            a32: '#fff',
            a56: '#fff',
            light: '#fff',
            main: '#fff',
            dark: '#fff',
            ...rauiTheme.colors,
          },
        },
        direction: dir,
        breakpoints: {
          values: {
            xs: 0,
            sm: 768,
            md: 1024,
            lg: 1200,
            xl: 1536,
          },
        },
        typography: {
          fontFamily:
            dir === 'rtl'
              ? ['Vazirmatn', 'Inter', 'sans-serif'].join(', ')
              : ['Inter', 'Vazirmatn', 'sans-serif'].join(', '),
        },
      }),
    [i18n.language]
  );

  return (
    <MuiThemeProvider theme={dynamicTheme}>
      <CssBaseline />
      <CacheProvider value={cacheRtl}>{children}</CacheProvider>
    </MuiThemeProvider>
  );
}
