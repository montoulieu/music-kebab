import GenrePicker from "../components/GenrePicker";
import { ReactSortable } from "react-sortablejs";
import { useEffect } from "react";
import useGenreData from "../hooks/useGenreData";
import ButtonBar from "../components/ButtonBar";
import Head from "next/head";

export default function Home() {
  const { pickedGenres, addGenre, generateThreeGenres, setPickedGenres } =
    useGenreData();

  useEffect(() => {
    generateThreeGenres();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>Music Kebab</title>
        <meta
          name="description"
          content="A tool to generate random music genres."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <div
        className={
          "flex items-center md:justify-center py-10 flex-col min-h-full"
        }
      >
        <header className="">
          <h1 className="text-4xl font-black text-center mb-1">
            -Music-Kebab-
          </h1>
          <p className="text-xs italic text-center font-light">
            A tool to generate random music genres.
          </p>
          <p className="text-xs italic text-center font-light">
            Drag and drop genres to reorder them.
          </p>
        </header>

        <div className="lg:max-w-6xl">
          <ButtonBar />

          {pickedGenres.length > 0 ? (
            <ReactSortable
              list={pickedGenres}
              setList={setPickedGenres}
              className="min-h-[20rem] flex items-start md:justify-center flex-col md:flex-row md:flex-wrap gap-5"
            >
              {pickedGenres.map((genre, index) => (
                <GenrePicker key={genre.name} index={index} />
              ))}
            </ReactSortable>
          ) : (
            <div className="min-h-[20rem] text-center dark:text-white flex justify-center pt-10">
              <h1 className="text-3xl font-extrabold mb-4">
                No genres added...
              </h1>
            </div>
          )}
        </div>
        <footer className="mt-auto pt-10">
          <p className="text-xs italic text-center font-light">
            Made by{" "}
            <a
              href="https://links.montoulieu.dev"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Pieter Montoulieu
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}
