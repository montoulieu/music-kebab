import create from "zustand";

const useGenreStore = create((set) => ({
  pickedGenres: [] as string[],
  setPickedGenres: (genres: string[]) =>
    set((state) => {
      return { pickedGenres: genres };
    }),
  setGenreIndex: (index: number, genre: string) =>
    set((state) => {
      const newPickedGenres = [...state.pickedGenres];
      newPickedGenres[index] = genre;
      return { pickedGenres: newPickedGenres };
    }),
}));

export default useGenreStore;
