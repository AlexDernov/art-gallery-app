import GlobalStyle from "../styles";
import Layout from "../components/Layout.js";
import useSWR from "swr";
import { useImmerLocalStorageState } from "../lib/hook/useImmerLocalStorageState";
import { uid } from "uid";

export default function App({ Component, pageProps }) {
  const URL = "https://example-apis.vercel.app/api/art";
  const [artPiecesInfo, updateArtPiecesInfo] = useImmerLocalStorageState(
    "art-pieces-info",
    { defaultValue: [] }
  );
  const [comments, updateComments] = useImmerLocalStorageState("comments", {
    defaultValue: [],
  });
  console.log("Art", artPiecesInfo);

  function handleToggleLiked(slug) {
    updateArtPiecesInfo((draft) => {
      const piece = draft.find((piece) => piece.slug === slug);
      if (piece) {
        piece.isLiked = !piece.isLiked;
      } else {
        draft.push({ slug, isLiked: true });
      }
    });
  }
  function handleAddComment(slug, newComment) {
    updateComments((draft) => {
      const comment = draft.find((comment) => comment.slug === slug);
      if (comment) {
        comments.push({
          date: new Date().toLocaleDateString("en-us", {
            dateStyle: "medium",
          }),
          id: uid(),
          comment: newComment,
        });
      } else {
        draft.push({
          slug,
          comments: [
            {
              date: new Date().toLocaleDateString("en-us", {
                dateStyle: "medium",
              }),
              id: uid(),
              comment: newComment,
            },
          ],
        });
      }
    });
  }
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

  /* const isLiked = artPiecesInfo.isLiked; */

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
        <Component
          {...pageProps}
          pieces={data}
          onToggleLiked={handleToggleLiked}
          artPiecesInfo={artPiecesInfo}
          onAddComment={handleAddComment}
          comments={comments}
        />
      </Layout>
    </>
  );
}
