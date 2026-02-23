export interface ContextMenuItem {
  label?: string;
  icon?: string;
  shortcut?: string;
  action?: () => void;
  children?: ContextMenuItem[];
  separator?: boolean;
  disabled?: boolean;
}
