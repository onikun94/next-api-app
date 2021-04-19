import Link from "next/link";
import { getApi } from "../../lib/api";
import { useState, useEffect } from "react";
import Layout from "../../components/layout";
const FirstPost = () => {
  const [apisa, setApisa] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await getApi();
      console.log(res);
      setApisa(res);
    })();
  }, []);
  return (
    <Layout>
      <Link href="/">
        <a>Back Page</a>
      </Link>
      <h1>this page is dog page</h1>
      {apisa &&
        apisa.map((url) => (
          <div>{url && <img src={url} alt="dog-api" width="300" />}</div>
        ))}
    </Layout>
  );
};

export default FirstPost;
