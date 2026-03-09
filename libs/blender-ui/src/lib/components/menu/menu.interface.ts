export interface MenuItem {
  label?: string;
  icon?: string;
  shortcut?: string;
  checked?: boolean; // If undefined, no checkbox is shown. If boolean, checkbox is shown.
  disabled?: boolean;
  separator?: boolean;
  items?: MenuItem[]; // For sub-menus
  action?: () => void;
  tooltip?: string;
  tooltipDetails?: string;
  tooltipPosition?: 'top' | 'right' | 'bottom' | 'left';
  active?: boolean;
}
