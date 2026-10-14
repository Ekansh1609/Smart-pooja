import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // "instant" behavior removes the smooth scroll effect for a snappy page load feel
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", 
    });
  }, [pathname]); // This effect runs every time the URL path changes

  return null;
};

export default ScrollToTop;