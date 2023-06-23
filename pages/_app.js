import GlobalStyle from "../styles";
import Layout from "../components/Layout.js";
import useSWR from "swr";
/* import { useState, useEffect } from "react"; */

export default function App({ Component, pageProps }) {
  const URL = "https://example-apis.vercel.app/api/art";
  /*  const [artPieces, setArtPieces] = useState([]); */
  /* useEffect(() => {
    async function getArtPieces() {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        console.log("Data", data);
        setArtPieces(data);
      } catch (error) {
        console.log(error);
      }
    }
    getArtPieces();
  }, []);
  if (!artPieces.length){
    return null
  } */

  const fetcher = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      const error = new Error("An error occurred while fetching the data.");
      error.info = await response.json();
      error.status = response.status;
      throw error;
    }
    return response.json();
  };

  const { data, isLoading, error } = useSWR(URL, fetcher);

  console.log("Data3", data);
  if (!data) {
    return null;
  }
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} pieces={data} />
      </Layout>
    </>
  );
}
