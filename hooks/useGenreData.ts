import genres from "../data/genres";
import { useEffect, useState } from "react";
import useGenreStore from "../store/useGenreStore";

const useGenreData = () => {
  const pickedGenres = useGenreStore((state) => state.pickedGenres);
  const setPickedGenres = useGenreStore((state) => state.setPickedGenres);
  const setGenreIndex = useGenreStore((state) => state.setGenreIndex);
  const genreCount = pickedGenres.length;

  const pickRandomGenre = () => {
    return genres[Math.floor(Math.random() * genres.length)].split(" ")[0];
  };

  const generateThreeGenres = () => {
    setPickedGenres([]);
    const genre = [pickRandomGenre(), pickRandomGenre(), pickRandomGenre()];
    setPickedGenres([...genre]);
  };

  const addGenre = () => {
    const genre = pickRandomGenre();
    setPickedGenres([...pickedGenres, genre]);
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
