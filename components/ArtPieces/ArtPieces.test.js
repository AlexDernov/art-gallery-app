import { render, screen } from "@testing-library/react";
import ArtPieces from "@/components/ArtPieces/ArtPieces";

test ("All art pieces are displayed as a list", () => {
    render(<ArtPieces pieces={[{
        slug: "blue-and-red",
        artist: "Jung-Hua Lui",
        name: "Blue and Red",
        imageSource: "https://example-apis.vercel.app/assets/art/blue-and-red.jpg",
        year: "2019",
        genre: "Abstract Painting",
        colors: ["#3f9eab", "#dfa597", "#323f6a", "#88d9ce", "#5a614c"],
        dimensions: { height: 2560, width: 1920, type: "jpg" },
      },
      {
        slug: "clay-bust-sculptures",
        artist: "dilara irem",
        name: "Clay Bust Sculptures",
        imageSource:
          "https://example-apis.vercel.app/assets/art/clay-bust-sculptures.jpg",
        year: "2022",
        genre: "Classics",
        colors: ["#27231d", "#af8b69", "#775942", "#8a745b", "#6c6c6c"],
        dimensions: { height: 1280, width: 1920, type: "jpg" },
      },
    ]} artPiecesInfo={[]} />);
    const listArtPieces = screen.getAllByRole("listitem");
    expect(listArtPieces).toHaveLength(2);
});