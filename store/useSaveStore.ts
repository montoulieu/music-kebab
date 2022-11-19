import create from "zustand";
import { persist } from "zustand/middleware";

const useSaveStore = create((set) => ({
  savedGenres: [] as string[],
  setSavedGenres: (genres: string[]) =>
    set((state) => {
      return { pickedGenres: genres };
    }),
  setSavedGenreIndex: (index: number, genre: string) =>
    set((state) => {
      const newSavedGenres = [...state.savedGenres];
      newSavedGenres[index] = genre;
      return { savedGenres: newSavedGenres };
    }),
}));

export default useSaveStore;
