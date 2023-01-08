import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Link from "next/link";

import { useRouter } from "next/router";
import { useTheme } from "hooks/useTheme";

import fetchTitleSetupData, { ITitleSetupData } from "api/fetchTitleSetupData";
import fetchTitles from "api/fetchTitles";
import fetchRouteData from "api/fetchRouteData";

interface IStaticProps {
  setupData: ITitleSetupData;
}

export const getStaticPaths = async () => {
  const titles = await fetchTitles();

  return {
    paths: titles.map((title) => ({
      params: {
        url: [title.slug],
        locale: 'en'
      }
    })),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps<IStaticProps> = async ({params, locale}) => {
  const parameters = params!.url as string[];
  const [titleSlug] = parameters;
  const route = parameters.slice(1).join('/') || '/';

  const setupData = await fetchTitleSetupData(titleSlug);
  const routeData = await fetchRouteData(titleSlug, route);

  if (!setupData || !routeData) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      setupData
    },
    revalidate: 86400
  };
}

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ setupData }) => {
  const router = useRouter();
  const { titleSlug } = router.query as { titleSlug: string };

  useTheme(titleSlug, setupData?.theme.colors);

  return (
    <div className="bg-light">
      <Link href="/tony">a</Link>
    </div>
  )
}

export default Home;