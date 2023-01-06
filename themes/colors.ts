import { useEffect } from "react";

export interface IThemeColors {
  bgLight?: string;
  bgMedium?: string;
  bgDark?: string;
  textPrimary?: string;
  textSecondary?: string;
  positive?: string;
  negative?: string;
}

export interface IMappedThemeColors {
  '--bg-color-light': string;
  '--bg-color-medium': string;
  '--bg-color-dark': string;
  '--text-color-primary': string;
  '--text-color-secondary': string;
  '--color-positive': string;
  '--color-negative': string;
}

export const mapThemeColors = (variables?: IThemeColors): IMappedThemeColors => {
  return {
    '--bg-color-light': variables?.bgLight || '#362F78',
    '--bg-color-medium': variables?.bgMedium || '#5145CD',
    '--bg-color-dark': variables?.bgDark || '#E5EDFF',
    '--text-color-primary': variables?.textPrimary || '#FFFFFF',
    '--text-color-secondary': variables?.textSecondary || '#FFFFFF',
    '--color-positive': variables?.positive || '#0E9F6E',
    '--color-negative': variables?.negative || '#F05252'
  };
}

export const applyTheme = (theme?: IThemeColors): void => {
  if (typeof window === 'undefined') {
    return;
  }

  const themeObject: IMappedThemeColors = mapThemeColors(theme);

  if (!themeObject) {
    return;
  }

  const root = document.querySelector(':root') as HTMLElement;

  if (!root) {
    throw new Error('Root element not found');
  }

  Object.entries(themeObject).forEach(([property, value]) => {
    root.style.setProperty(property, value);
  });
}