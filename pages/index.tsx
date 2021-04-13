import { Button } from "../components/Button";
import Link from "next/link";
import Head from "next/head";
const Home = () => {
  return (
    <div>
      <Head>
        <title>HELLO ONIKUN</title>
      </Head>
      <h1>main page</h1>
      <h2>I will implement various page by using webAPI</h2>
      <Button />
      <ul>
        <li>
          <Link href="posts/first-post">
            <a>dog api</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
