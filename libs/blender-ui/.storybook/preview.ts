import type { Preview, Decorator } from '@storybook/angular';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { blenderDark, blenderLight } from '../src/lib/services/themes';

const applyTheme = (themeName: 'dark' | 'light') => {
  const theme = themeName === 'dark' ? blenderDark : blenderLight;
  Object.entries(theme.properties).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });
};

const withBlenderTheme: Decorator = (story, context) => {
  const themeName = (context.globals['theme'] ?? 'dark') as 'dark' | 'light';
  applyTheme(themeName);
  return story();
};

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Blender UI Theme',
      defaultValue: 'dark',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'dark', title: 'Dark', icon: 'moon' },
          { value: 'light', title: 'Light', icon: 'sun' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    withBlenderTheme,
    (story) => ({
      ...story(),
      applicationConfig: {
        providers: [provideAnimationsAsync()],
      },
      styles: [
        `
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap');
        @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
        * { box-sizing: border-box; }
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 12px;
        }
        `,
      ],
    }),
  ],
  parameters: {
    backgrounds: { disable: true },
    layout: 'padded',
  },
};

export default preview;
