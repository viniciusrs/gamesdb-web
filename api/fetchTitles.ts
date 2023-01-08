import { ITitle } from "types/titles";

const fetchTitles = async (): Promise<ITitle[]> => {
  // To-do: Fetch data from API
  const data: ITitle[] = [
    { id: "multiversus", name: "Multiversus", slug: "multiversus" },
    { id: "kofxv", name: "KOF XV", slug: "kofxv" },
    { id: "street-fighter-v", name: "Street Fighter V", slug: "street-fighter-v" }
  ];

  return data;
}

export default fetchTitles;