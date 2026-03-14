export type BuiComponentMaturity = 'stable' | 'beta' | 'experimental';

export type BuiDensity = 'compact' | 'comfortable';

export type BuiComponentSize = 'sm' | 'md' | 'lg';

export type BuiTone = 'neutral' | 'info' | 'success' | 'warning' | 'danger';

export interface BuiThemeTokens {
  color: {
    primary: string;
    highlight: string;
    text: string;
    textMuted: string;
    textDisabled: string;
    info: string;
    success: string;
    warning: string;
    danger: string;
  };
  surface: {
    app: string;
    panel: string;
    panelHeader: string;
    panelHeaderHover: string;
    panelHeaderExpanded: string;
    input: string;
    tab: string;
    tabActive: string;
    menu: string;
    card: string;
    overlay: string;
  };
  border: {
    subtle: string;
    default: string;
    strong: string;
    hover: string;
    focus: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    row: string;
  };
  radius: {
    sm: string;
    md: string;
    lg: string;
  };
  typography: {
    family: string;
    sizeXs: string;
    sizeSm: string;
    sizeMd: string;
    weightRegular: string;
    weightMedium: string;
    weightBold: string;
  };
  icon: {
    sm: string;
    md: string;
    lg: string;
  };
  density: {
    compactRow: string;
    comfortableRow: string;
    controlHeightSm: string;
    controlHeightMd: string;
  };
  focus: {
    outlineWidth: string;
    outlineOffset: string;
  };
  motion: {
    fast: string;
    normal: string;
  };
  channel: {
    red: string;
    green: string;
    blue: string;
    yellow: string;
  };
  asset: {
    folder: string;
  };
}

export interface Theme {
  name: 'dark' | 'light';
  tokens: BuiThemeTokens;
  properties: Record<string, string>;
}

