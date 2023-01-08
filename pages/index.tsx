import { NextPage } from "next";
import { useTheme } from "hooks/useTheme";
import Link from "next/link";

const Home: NextPage = () => {
  useTheme(undefined,{
    bgLight: 'purple'
  });

  return (
    <div className="bg-light">
      <Link href="/multiversus">a</Link>
    </div>
  )
}

export default Home;