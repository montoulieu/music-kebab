import genres from "../data/genres";
import { useEffect, useState } from "react";
import { useGenreStore, GenreStore, Genre } from "../store/useGenreStore";

const useGenreData = () => {
  const { pickedGenres, setPickedGenres, setGenreIndex } = useGenreStore();
  const genreCount = pickedGenres.length;

  const pickRandomGenre = () => {
    return genres[Math.floor(Math.random() * genres.length)].split(" ")[0];
  };

  const generateThreeGenres = () => {
    setPickedGenres([]);
    const genre = [
      { id: 0, name: pickRandomGenre() },
      { id: 1, name: pickRandomGenre() },
      { id: 2, name: pickRandomGenre() },
    ];
    setPickedGenres([...genre]);
  };

  const addGenre = () => {
    const genre = pickRandomGenre();
    setPickedGenres([...pickedGenres, { id: genreCount, name: genre }]);
  };

  const swapGenre = (index: number) => {
    const genre = pickRandomGenre();
    setGenreIndex(index, genre);
  };

  const removeGenre = (index: number) => {
    const newPickedGenres = [...pickedGenres];
    newPickedGenres.splice(index, 1);
    setPickedGenres(newPickedGenres);
  };

  return {
    pickedGenres,
    generateThreeGenres,
    pickRandomGenre,
    addGenre,
    removeGenre,
    swapGenre,
    setPickedGenres,
  };
};

export default useGenreData;
