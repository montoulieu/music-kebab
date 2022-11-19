import React from "react";
import { SyncIcon, PlusIcon, CopyIcon } from "@primer/octicons-react";
import useGenreData from "../hooks/useGenreData";

const ButtonBar = () => {
  const { addGenre, generateThreeGenres, pickedGenres } = useGenreData();

  const copyGenres = () => {
    navigator.clipboard.writeText(pickedGenres.join(" "));
  };

  return (
    <div className="flex justify-center my-10 gap-2">
      <button
        className="hover:bg-yellow-300 dark:hover:bg-yellow-500"
        onClick={generateThreeGenres}
      >
        <SyncIcon className="-translate-y-0.5 mr-2" /> Randomize
      </button>
      <button
        className="hover:bg-blue-300 dark:hover:bg-blue-500"
        onClick={copyGenres}
      >
        <CopyIcon className="-translate-y-0.5 mr-2" /> Copy Genres
      </button>
      <button
        className="hover:bg-lime-300 dark:hover:bg-lime-500"
        onClick={addGenre}
      >
        <PlusIcon className="-translate-y-0.5 mr-2" /> Add Genre
      </button>
    </div>
  );
};

export default ButtonBar;
