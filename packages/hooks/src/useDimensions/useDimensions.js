import { useLayoutEffect, useState, useCallback } from "react";

// Export hook
export default function useDimensions() {
  const [node, setNode] = useState(null);
  const ref = useCallback((newNode) => {
    setNode(newNode);
  }, []);

  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  const measure = useCallback((innerNode) => {
    const rect = innerNode.getBoundingClientRect();
    setDimensions({
      width: rect.width,
      height: rect.height,
    });
  }, []);

  useLayoutEffect(() => {
    let resizeObserver;
    if (node) {
      measure(node);

      resizeObserver = new ResizeObserver(() => {
        measure(node);
      });

      resizeObserver.observe(node);
    }
    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [node, measure]);

  return {
    ref,
    dimensions,
  };
}
