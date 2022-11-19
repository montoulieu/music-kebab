import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import useGenreData from "../hooks/useGenreData";
import { TrashIcon, SyncIcon } from "@primer/octicons-react";
import { Genre } from "../store/useGenreStore";

export default function GenrePicker({
  genre,
  index,
}: {
  genre: Genre;
  index: number;
}) {
  const { pickedGenres, removeGenre, swapGenre } = useGenreData();

  return (
    <div
      className={
        "genre text-center border-2 border-dotted bg-white dark:bg-black border-gray-500 dark:border-gray-500 rounded-2xl shadow-md p-5"
      }
    >
      <div className="label mb-4">
        <h1 className="text-3xl font-extrabold select-none">
          {pickedGenres[index].name}
        </h1>
      </div>

      <div className="flex">
        <button
          className="mx-auto flex items-center mr-2 hover:bg-green-300 dark:hover:bg-green-500"
          onClick={() => swapGenre(index)}
        >
          <SyncIcon className="mr-2" /> Swap
        </button>
        <button
          className="mx-auto flex items-center hover:bg-red-300 dark:hover:bg-red-500 "
          onClick={() => removeGenre(index)}
        >
          <TrashIcon className="mr-2" /> Remove
        </button>
      </div>
    </div>
  );
}
