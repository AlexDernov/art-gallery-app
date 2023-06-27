import { render, screen } from "@testing-library/react";
import ArtPiecePreview from "@/components/ArtPiecePreview/ArtPiecePreview";

test("renders artPieces image, title and artist", () => {
  render(
    <ArtPiecePreview
      name="Clay Bust Sculptures"
      image="https://example-apis.vercel.app/assets/art/clay-bust-sculptures.jpg"
      artist="dilara irem"
      slug="clay-bust-sculptures"
    />
  );
  
  const image = screen.getByRole("img", {name:"clay-bust-sculptures"});
  const name = screen.getByText(/Clay Bust Sculptures/i);
  const artist = screen.getByText(/dilara irem/i);

  expect(name).toBeInTheDocument();
  expect(artist).toBeInTheDocument();
  expect(image).toBeInTheDocument();
});
