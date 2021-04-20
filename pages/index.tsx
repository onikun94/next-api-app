import { Button } from "../components/Button";
import Layout from "../components/layout";
import Link from "next/link";
import Head from "next/head";
const Home = () => {
  return (
    <Layout>
      <Head>
        <title>HELLO ONIKUN</title>
      </Head>
      <h1>main page</h1>
      <h2>I will implement various page by using webAPI</h2>
      <Button title="Hello" />
      <ul>
        <li>
          <Link href="posts/first-post">
            <a>dog api</a>
          </Link>
        </li>
      </ul>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">1</th>
            <th scope="col">2</th>
            <th scope="col">3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
};

export default Home;
