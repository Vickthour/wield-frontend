import { useEffect, useState } from "react";

function useMediaQuery(query: string): boolean {
  const getMatches = (query: string): boolean => {
    // Prevents SSR issues
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState<boolean>(getMatches(query));

  function handleChange() {
    setMatches(getMatches(query));
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    // Triggered at the first client-side load and if query changes
    handleChange();

    // Listen matchMedia
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener("change", handleChange);
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener("change", handleChange);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return matches;
}

export default useMediaQuery;

export const useMd=()=>useMediaQuery("(min-width: 768px)");
export const useMid=()=>{
  const [mid, setMid] = useState(false);
  const midQuery = useMediaQuery("(min-width: 960px)");
  useEffect(() => {
    if (mid !== midQuery) {
      setMid(midQuery);
    }
  }, [midQuery, mid, setMid]);
  return mid
};
export const useLg=()=>useMediaQuery("(min-width: 1024px)");