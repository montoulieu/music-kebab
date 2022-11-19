import create from "zustand";

interface GenreStore {
  pickedGenres: string[];
  setPickedGenres: (genres: string[]) => void;
  setGenreIndex: (index: number, genre: string) => void;
}

const useGenreStore = create((set) => ({
  pickedGenres: [] as string[],
  setPickedGenres: (genres: string[]) =>
    set((state: GenreStore) => {
      return { pickedGenres: genres };
    }),
  setGenreIndex: (index: number, genre: string) =>
    set((state: GenreStore) => {
      const newPickedGenres = [...state.pickedGenres];
      newPickedGenres[index] = genre;
      return { pickedGenres: newPickedGenres };
    }),
}));

export default useGenreStore;
