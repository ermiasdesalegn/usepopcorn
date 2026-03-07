export function useLocalStorageState(watched) {
  const [watched, setWatched] = useState(function () {
    const storedWatched = localStorage.getItem("watched");
    return JSON.parse(storedWatched);
  });
}
