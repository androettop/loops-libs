import { useLayoutEffect, useState, useMemo } from "react";

const useScrollPosition = (elementId) => {
  const element = useMemo(
    () => document.getElementById(elementId),
    [elementId]
  );

  const [position, setPosition] = useState({ top: 0, left: 0 });

  const handleScroll = () => {
    setPosition({
      top: element?.scrollTop || 0,
      left: element?.scrollLeft || 0,
    });
  };

  useLayoutEffect(() => {
    element?.addEventListener("scroll", handleScroll, true);
    return () => {
      element?.removeEventListener("scroll", handleScroll, true);
    };
  }, []);

  return position;
};

export default useScrollPosition;
