import { INavigation } from "types/navigation";
import { ITheme } from "types/theme";
import { ITitle } from "types/titles";

export interface ITitleSetupData {
  title: ITitle;
  navigation: INavigation;
  theme: ITheme;
}

const fetchTitleSetupData = async (titleSlug: string) => {
  // To-do: Fetch data from API	
  const data: ITitleSetupData = {
    title: { id: titleSlug, name: titleSlug, slug: titleSlug },
    navigation: {
      titles: [
        { id: "kofxv", name: "KOF XV", slug: "kofxv"},
        { id: "street-fighter-v", name: "Street Fighter V", slug: "street-fighter-v" }
      ],
      paths: [
        { label: "Home", url: "/" },
        { label: "Characters", url: "/characters" }
      ]
    },
    theme: {
      colors: {
        bgLight: "red",
        bgMedium: "#f5f5f5",
        bgDark: "#000",
        textPrimary: "#000",
        textSecondary: "#fff",
        action: "#FBCEB1",
        positive: "#0E9F6E",
        negative: "#F05252"
      }
    }
  };

  return data;
}

export default fetchTitleSetupData;