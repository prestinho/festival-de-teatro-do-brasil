import { useState, useEffect } from "react";

export function useNavigation() {
    const [hasNavigated, setHasNavigated] = useState(false);

    useEffect(() => {
      const scrollListener = () => {
        if (window.scrollY > 55) {
          setHasNavigated(true);
        } else {
          setHasNavigated(false);
        }
      }
  
      window.addEventListener('scroll', scrollListener);
  
      return () => {
        window.removeEventListener('scroll', scrollListener);
      }
    },[]);

  return hasNavigated;
}
