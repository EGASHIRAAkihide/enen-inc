import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      home
      <Link href="/about">about</Link>
      アイウエオ
    </div>
  );
};

export default Home;
