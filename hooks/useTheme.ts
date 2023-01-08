import { applyTheme } from "themes/colors";
import { useEffect } from "react";
import { IThemeColors } from "types/theme";

export const useTheme = (titleSlug?: string, theme?: IThemeColors): void => {
  useEffect(() => {
    applyTheme(theme)
  }, [titleSlug])
}