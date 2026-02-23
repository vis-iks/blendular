export interface Theme {
  name: string;
  properties: {
    [key: string]: string;
  };
}

export const blenderDark: Theme = {
  name: 'dark',
  properties: {
    '--bui-primary': '#4772b3',
    '--bui-bg-light': '#e0e0e0',
    '--bui-bg-dark': '#1d1d1d',
    '--bui-panel-bg': '#2b2b2b',
    '--bui-panel-header': '#303030',
    '--bui-input-bg': '#181818',
    '--bui-input-active-green': '#55802b',
    '--bui-input-active-yellow': '#8c7f21',
    '--bui-input-text': '#dedede',
    '--bui-tab-bg': '#222222',
    '--bui-tab-active': '#3d3d3d',
    '--bui-border-dark': '#3d3d3d',
    '--bui-text-color': '#cccccc',
    '--bui-border-radius': '4px',
    '--bui-highlight': '#5680c2',
    '--bui-surface-dark': '#303030',
    '--bui-surface-light': '#f5f5f5',
    '--bui-card-bg': '#303030',
  },
};

export const blenderLight: Theme = {
  name: 'light',
  properties: {
    '--bui-primary': '#4772b3',
    '--bui-bg-light': '#e0e0e0',
    '--bui-bg-dark': '#1d1d1d',
    '--bui-panel-bg': '#f0f0f0',
    '--bui-panel-header': '#f5f5f5',
    '--bui-input-bg': '#ffffff',
    '--bui-input-active-green': '#7bc654',
    '--bui-input-active-yellow': '#d4c24a',
    '--bui-input-text': '#333333',
    '--bui-tab-bg': '#d9d9d9',
    '--bui-tab-active': '#e6e6e6',
    '--bui-border-dark': '#d1d1d1',
    '--bui-text-color': '#222222',
    '--bui-border-radius': '4px',
    '--bui-highlight': '#375e97',
    '--bui-surface-dark': '#303030',
    '--bui-surface-light': '#f5f5f5',
    '--bui-card-bg': '#ffffff',
  },
};
