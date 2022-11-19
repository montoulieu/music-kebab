import create from "zustand";

export interface GenreStore {
  pickedGenres: Genre[];
  setPickedGenres: (genres: Genre[]) => void;
  setGenreIndex: (index: number, genre: string) => void;
}

export interface Genre {
  id: number;
  name: string;
}

export const useGenreStore = create<GenreStore>((set) => ({
  pickedGenres: [] as Genre[],
  setPickedGenres: (genres: Genre[]) =>
    set((state: GenreStore) => {
      return { pickedGenres: genres };
    }),
  setGenreIndex: (index: number, genre: string) =>
    set((state: GenreStore) => {
      const newPickedGenres = [...state.pickedGenres];
      newPickedGenres[index] = { id: index, name: genre };
      return { pickedGenres: newPickedGenres };
    }),
}));
