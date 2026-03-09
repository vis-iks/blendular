export interface EditorTypeItem {
  label: string;
  /** bl-icons class name, e.g. 'bl-icons-view3d' */
  icon: string;
  shortcut?: string;
  active?: boolean;
}

export interface EditorTypeColumn {
  category: string;
  items: EditorTypeItem[];
}
