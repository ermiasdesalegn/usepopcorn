import { useState } from "react";
export function useLocalStorageState() {
  const [watched, setWatched] = useState(function () {
    const storedWatched = localStorage.getItem("watched");
    return JSON.parse(storedWatched);
  });
  return [watched, setWatched];
}
