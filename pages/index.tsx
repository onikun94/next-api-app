import next from "next";
import Link from "next/link";
const Home = () => {
  return (
    <div>
      <h1>main page</h1>
      <h2>I will implement various page by using webAPI</h2>
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
