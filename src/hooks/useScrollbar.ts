import React, { useEffect } from "react";
import { OverlayScrollbars } from "overlayscrollbars";



const useScrollbar = (
  root: React.MutableRefObject<null>,
  hasScroll: boolean
) => {
  console.log(root);
  console.log(hasScroll);

  useEffect(() => {
    let scrollbars: OverlayScrollbars;

    if (root.current && hasScroll) {
      scrollbars = OverlayScrollbars(root.current, {
        scrollbars: {
          visibility: "auto",
          autoHide: "never",
        },
      });
    }

    return () => {
      if (scrollbars) {
        scrollbars.destroy();
      }
    };
  }, [root, hasScroll]);
};

export default useScrollbar;
