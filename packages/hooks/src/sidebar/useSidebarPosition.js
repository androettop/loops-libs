import { useState, useEffect } from "react";

const contentId = "content2";

const getPosition = () => document.getElementById(contentId)?.offsetLeft || 0;

const useSidebarPosition = () => {
  // save current position in the state object
  const [position, setPosition] = useState(getPosition());

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    const resizeListener = () => {
      // change width from the state object
      setPosition(getPosition());
    };
    const resizeObserver = new ResizeObserver(resizeListener);

    // set resize listener
    const content = document.getElementById(contentId);
    if (content) {
      resizeObserver.observe(content);
    }

    // clean up function
    return () => {
      if (content) {
        resizeObserver.unobserve(content);
      }
    };
  }, []);

  return position;
};

export default useSidebarPosition;
