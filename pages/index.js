import Head from "next/head";

export default function Home(props) {
  /** You can access to liff and liffError object through the props.
   *  Learn more about LIFF API documentation (https://developers.line.biz/en/reference/liff)
   **/
  const { liff, liffError } = props;

  if (!liff && !liffError) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>LIFF practice</title>
      </Head>
      <div className="home">こんにちは</div>
      <div className="home">LIFF Version: {liff.getVersion()}</div>
      <div className="home">LIFF Error: {liffError}</div>
      <div className="home">LIFF ID: {liff.getContext().liffId}</div>
      <button onClick={() => liff.sendMessages([{
        type: "text",
        text: "Hello World",
      }])}>
        Send Message
      </button>
      <button onClick={() => liff.closeWindow()}>
        Close Window
      </button>
    </div>
  );
}
