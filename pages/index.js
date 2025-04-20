import Head from "next/head";
import packageJson from "../package.json";

export default function Home(props) {
  /** You can access to liff and liffError object through the props.
   *  const { liff, liffError } = props;
   *  console.log(liff.getVersion());
   *
   *  Learn more about LIFF API documentation (https://developers.line.biz/en/reference/liff)
   **/
  return (
    <div>
      <Head>
        <title>LIFF practice</title>
      </Head>
      <div className="home">
        こんにちは
      </div>
    </div>
  );
}
