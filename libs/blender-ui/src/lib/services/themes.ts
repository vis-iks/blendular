export interface Theme {
  name: string;
  properties: {
    [key: string]: string;
  };
}

export const blenderDark: Theme = {
  name: 'dark',
  properties: {
    '--bui-primary': '#e77e22',
    '--bui-bg-light': '#f0f0f0',
    '--bui-bg-dark': '#1d1d1d',
    '--bui-panel-bg': '#282828',
    '--bui-panel-header': '#303030',
    '--bui-input-bg': '#232323',
    '--bui-input-active-green': '#55802b',
    '--bui-input-active-yellow': '#8c7f21',
    '--bui-input-text': '#dedede',
    '--bui-tab-bg': '#222222',
    '--bui-tab-active': '#3d3d3d',
    '--bui-border-dark': '#181818',
    '--bui-text-color': '#e2e2e2',
    '--bui-border-radius': '4px',
  },
};

export const blenderLight: Theme = {
  name: 'light',
  properties: {
    '--bui-primary': '#e77e22',
    '--bui-bg-light': '#ffffff',
    '--bui-bg-dark': '#f0f0f0',
    '--bui-panel-bg': '#e6e6e6',
    '--bui-panel-header': '#d9d9d9',
    '--bui-input-bg': '#ffffff',
    '--bui-input-active-green': '#7bc654',
    '--bui-input-active-yellow': '#d4c24a',
    '--bui-input-text': '#333333',
    '--bui-tab-bg': '#d9d9d9',
    '--bui-tab-active': '#e6e6e6',
    '--bui-border-dark': '#cccccc',
    '--bui-text-color': '#333333',
    '--bui-border-radius': '4px',
  },
};
