import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import useGenreData from "../hooks/useGenreData";
import { TrashIcon, SyncIcon, SearchIcon } from "@primer/octicons-react";
import { Genre } from "../store/useGenreStore";

export default function GenrePicker({ index }: { index: number }) {
  const { pickedGenres, removeGenre, swapGenre } = useGenreData();

  const searchGenre = () => {
    const wikiSearch = `https://en.wikipedia.org/wiki/Special:Search?search=${pickedGenres[index].name}`;
    window.open(wikiSearch, "_blank");
  };

  return (
    <div
      className={
        "genre text-center border-2 border-dotted bg-white dark:bg-black border-gray-500 dark:border-gray-500 rounded-2xl shadow-md p-5 w-full md:w-auto"
      }
    >
      <div className="label mb-4">
        <h1 className="text-3xl font-extrabold select-none">
          {pickedGenres[index].name}
        </h1>
      </div>

      <div className="flex items-center justify-center">
        <button
          className="flex items-center mr-2 hover:bg-green-500 dark:hover:bg-green-600"
          onClick={() => swapGenre(index)}
        >
          <SyncIcon className="" />
          {/* Swap */}
        </button>
        <button
          className="flex items-center mr-2 hover:bg-red-500 dark:hover:bg-red-600 "
          onClick={() => removeGenre(index)}
        >
          <TrashIcon className="" />
          {/* Remove */}
        </button>
        <button
          className="flex items-center hover:bg-blue-500 dark:hover:bg-blue-600 "
          onClick={searchGenre}
        >
          <SearchIcon className="" />
          {/* Remove */}
        </button>
      </div>
    </div>
  );
}
