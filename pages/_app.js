import GlobalStyle from "../styles";
import Layout from "../components/Layout.js";
import useSWR from "swr";
import { useImmerLocalStorageState } from "../lib/hook/useImmerLocalStorageState";

export default function App({ Component, pageProps }) {
  const URL = "https://example-apis.vercel.app/api/art";

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

  const [artPiecesInfo, updateArtPiecesInfo] = useImmerLocalStorageState(
    "art-pieces-info",
    { defaultValue: data }
  );
  function handleToggleLiked(slug) {
    updateArtPiecesInfo((draft) => {
      const piece = draft.find((piece) => piece.slug === slug);
      piece ? {...piece, isLiked: !isLiked} : piece;
    });
  }

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          pieces={artPiecesInfo}
          onToggleLiked={handleToggleLiked}
          isLiked={isLiked}
        />
      </Layout>
    </>
  );
}
