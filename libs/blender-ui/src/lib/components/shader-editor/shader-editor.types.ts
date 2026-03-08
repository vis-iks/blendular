export type SocketType = 'shader' | 'color' | 'vector' | 'float';

export interface ShaderSocket {
  id: string;
  name: string;
  type: SocketType;
  isConnected?: boolean;
}

export interface ShaderNode {
  id: string;
  title: string;
  type: string; // 'Texture Coordinate', 'Mapping', etc. used for header color
  x: number;
  y: number;
  width?: number; // Optional width, default to standard
  inputs: ShaderSocket[];
  outputs: ShaderSocket[];
  data?: unknown; // For extra controls like sliders, dropdowns
}

export interface ShaderConnection {
  id: string;
  sourceNodeId: string;
  sourceSocketId: string;
  targetNodeId: string;
  targetSocketId: string;
}

export const NODE_HEADER_COLORS: Record<string, string> = {
  'Texture Coordinate': '#9f4f4f',
  'Mapping': '#4f5f7f',
  'Image Texture': '#c78d4b',
  'Principled BSDF': '#4f7f4f',
  'Material Output': '#7f4f4f',
};

export const SOCKET_COLORS: Record<SocketType, string> = {
  shader: '#63c763',
  color: '#c7c729',
  vector: '#6363c7',
  float: '#a1a1a1',
};
