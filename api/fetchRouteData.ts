export interface IRouteData {
  pageContent: any;
}

const fetchRouteData = async (titleSlug: string, route: string) => {
  // To-do: Fetch data from API
  const data: IRouteData = {
    pageContent: {
      title: "Characters",
      description: "Characters in KOF XV",
    }
  };

  return data;
}

export default fetchRouteData;