import { applyTheme, IThemeColors } from "@themes/colors";

export const useTheme = (theme?: IThemeColors): void => {
  applyTheme(theme);
}