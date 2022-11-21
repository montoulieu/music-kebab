import React from "react";
import { SyncIcon, PlusIcon, CopyIcon } from "@primer/octicons-react";
import useGenreData from "../hooks/useGenreData";

const ButtonBar = () => {
  const { addGenre, generateThreeGenres, pickedGenres } = useGenreData();

  const copyGenres = () => {
    const genres = pickedGenres.map((genre) => genre.name);
    navigator.clipboard.writeText(genres.join(" "));
  };

  return (
    <div className="flex justify-center my-10 gap-2">
      <button
        className="hover:bg-yellow-500 dark:hover:bg-yellow-600"
        onClick={generateThreeGenres}
      >
        <SyncIcon className="-translate-y-0.5 mr-2" /> Shuffle
      </button>

      <button
        className="hover:bg-blue-500 dark:hover:bg-blue-600"
        onClick={copyGenres}
      >
        <CopyIcon className="-translate-y-0.5 mr-2" /> Copy
      </button>

      <button
        className="hover:bg-green-500 dark:hover:bg-green-600"
        onClick={addGenre}
        disabled={pickedGenres.length >= 8}
        aria-label="Add genre"
      >
        <PlusIcon className="-translate-y-0.5 mr-2" />
        Add
      </button>
    </div>
  );
};

export default ButtonBar;
