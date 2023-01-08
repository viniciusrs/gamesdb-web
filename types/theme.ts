export interface IThemeColors {
  bgLight?: string;
  bgMedium?: string;
  bgDark?: string;
  textPrimary?: string;
  textSecondary?: string;
  action?: string;
  positive?: string;
  negative?: string;
}

export interface ITheme {
  colors?: IThemeColors;
}