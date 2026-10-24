import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ritxx — Music, Movies, Anime & Manga" },
      {
        name: "description",
        content: "ritxx is the main hub for music, movies, anime and manga — one gate to every realm.",
      },
      { property: "og:title", content: "ritxx — Music, Movies, Anime & Manga" },
      {
        property: "og:description",
        content: "One gate to listen, watch and read. The ritxx entertainment hub.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="fixed inset-0 bg-background">
      <iframe
        title="ritxx"
        src="/landing-pages/kage.html?v=8"
        className="absolute inset-0 block h-full w-full border-0"
      />
    </div>
  );
}
