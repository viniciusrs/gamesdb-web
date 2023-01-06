import { NextPage } from "next";
import { useTheme } from "@hooks/useTheme";
import Link from "next/link";

const Home: NextPage = () => {
  useTheme({
    bgLight: 'purple'
  });

  return (
    <div className="bg-light">
      <Link href="/tony">a</Link>
    </div>
  )
}

export default Home;