import Link from "next/link";
import { getApi } from "../../lib/api";
import { useState, useEffect } from "react";
const FirstPost = () => {
  const [apisa, setApisa] = useState(null);
  useEffect(() => {
    (async () => {
      console.log("aa");
      const res = await getApi();
      console.log(res);
      setApisa(res);
    })();
  }, []);
  return (
    <div>
      <Link href="/">
        <a>Back Page</a>
      </Link>
      <h1>this page is dog page</h1>
      {apisa &&
        apisa.map((url) => (
          <div>{url && <img src={url} alt="dog-api" width="300" />}</div>
        ))}
    </div>
  );
};

export default FirstPost;
