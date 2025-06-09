import { createContext, useContext, useState } from "react";

const AppContext = createContext();
export const useApp = () => useContext(AppContext);

export default function AppProvider({ children }) {
  // “My List” movies
  const [myList, setMyList] = useState([]);

  // Add (dedupe)
  const addToList = (movie) =>
    setMyList((prev) =>
      prev.some((m) => m.id === movie.id) ? prev : [...prev, movie]
    );

  // Remove (optional helper)
  const removeFromList = (id) =>
    setMyList((prev) => prev.filter((m) => m.id !== id));

  return (
    <AppContext.Provider value={{ myList, addToList, removeFromList }}>
      {children}
    </AppContext.Provider>
  );
}
