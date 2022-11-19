import GenrePicker from "../components/GenrePicker";
import { ReactSortable } from "react-sortablejs";
import { useEffect } from "react";
import useGenreData from "../hooks/useGenreData";
import ButtonBar from "../components/ButtonBar";

export default function Home() {
  const { pickedGenres, addGenre, generateThreeGenres, setPickedGenres } =
    useGenreData();

  useEffect(() => {
    generateThreeGenres();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={"flex items-center justify-center flex-col min-h-screen"}>
      <header className="">
        <h1 className="text-4xl font-black text-center mb-1">Music Kebab</h1>
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
            className="min-h-[20rem] flex items-start justify-center flex-col md:flex-row md:flex-wrap gap-5"
          >
            {pickedGenres.map((genre, index) => (
              <GenrePicker key={genre.id} index={index} />
            ))}
          </ReactSortable>
        ) : (
          <div className="min-h-[20rem] text-center dark:text-white flex justify-center pt-10">
            <h1 className="text-3xl font-extrabold mb-4">No genres added...</h1>
          </div>
        )}
      </div>
    </div>
  );
}
