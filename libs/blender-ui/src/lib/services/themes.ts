import { createThemeProperties } from '../foundation/theme-tokens';
import { BuiThemeTokens, Theme } from '../foundation/types';
export type { Theme } from '../foundation/types';

const baseTypography = {
  family: '"Segoe UI", "Noto Sans", sans-serif',
  sizeXs: '11px',
  sizeSm: '12px',
  sizeMd: '13px',
  weightRegular: '400',
  weightMedium: '500',
  weightBold: '600',
};

const baseSpacing = {
  xs: '2px',
  sm: '4px',
  md: '8px',
  lg: '12px',
  row: '22px',
};

const baseDensity = {
  compactRow: '22px',
  comfortableRow: '28px',
  controlHeightSm: '24px',
  controlHeightMd: '28px',
};

const baseTheme = (tokens: BuiThemeTokens): Theme => ({
  name: 'dark',
  tokens,
  properties: createThemeProperties(tokens),
});

const blenderDarkTokens: BuiThemeTokens = {
  color: {
    primary: '#4772b3',
    highlight: '#5680c2',
    text: '#cccccc',
    textMuted: '#9ca3af',
    textDisabled: '#6b7280',
    info: '#4e8ce0',
    success: '#7ec928',
    warning: '#d9bc26',
    danger: '#e04e4e',
  },
  surface: {
    app: '#1d1d1d',
    panel: '#2b2b2b',
    panelHeader: '#303030',
    panelHeaderHover: '#373737',
    panelHeaderExpanded: '#3a3a3a',
    input: '#181818',
    tab: '#222222',
    tabActive: '#3d3d3d',
    menu: '#2b2b2b',
    card: '#303030',
    overlay: '#e0e0e0',
  },
  border: {
    subtle: '#2a2a2a',
    default: '#3d3d3d',
    strong: '#4a4a4a',
    hover: '#5b82c7',
    focus: '#78a3eb',
  },
  spacing: baseSpacing,
  radius: {
    sm: '3px',
    md: '5px',
    lg: '8px',
  },
  typography: baseTypography,
  icon: {
    sm: '12px',
    md: '14px',
    lg: '16px',
  },
  density: baseDensity,
  focus: {
    outlineWidth: '1px',
    outlineOffset: '1px',
  },
  motion: {
    fast: '120ms',
    normal: '180ms',
  },
  channel: {
    red: '#e04e4e',
    green: '#7ec928',
    blue: '#4e8ce0',
    yellow: '#d9bc26',
  },
  asset: {
    folder: '#dcb67a',
  },
};

const blenderLightTokens: BuiThemeTokens = {
  color: {
    primary: '#4772b3',
    highlight: '#375e97',
    text: '#222222',
    textMuted: '#666666',
    textDisabled: '#9ca3af',
    info: '#4e8ce0',
    success: '#7bc654',
    warning: '#d4c24a',
    danger: '#e04e4e',
  },
  surface: {
    app: '#d9d9d9',
    panel: '#f0f0f0',
    panelHeader: '#f5f5f5',
    panelHeaderHover: '#fafafa',
    panelHeaderExpanded: '#ffffff',
    input: '#181818',
    tab: '#d9d9d9',
    tabActive: '#e6e6e6',
    menu: '#f0f0f0',
    card: '#ffffff',
    overlay: '#fafafa',
  },
  border: {
    subtle: '#e3e3e3',
    default: '#d1d1d1',
    strong: '#b0b0b0',
    hover: '#6a8fcb',
    focus: '#375e97',
  },
  spacing: baseSpacing,
  radius: {
    sm: '3px',
    md: '5px',
    lg: '8px',
  },
  typography: baseTypography,
  icon: {
    sm: '12px',
    md: '14px',
    lg: '16px',
  },
  density: baseDensity,
  focus: {
    outlineWidth: '1px',
    outlineOffset: '1px',
  },
  motion: {
    fast: '120ms',
    normal: '180ms',
  },
  channel: {
    red: '#e04e4e',
    green: '#7ec928',
    blue: '#4e8ce0',
    yellow: '#d9bc26',
  },
  asset: {
    folder: '#dcb67a',
  },
};

export const blenderDark: Theme = {
  ...baseTheme(blenderDarkTokens),
  name: 'dark',
};

export const blenderLight: Theme = {
  ...baseTheme(blenderLightTokens),
  name: 'light',
};
