"use client";

import { useEffect, useState } from "react";

export function useDevice() {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    function handleWidth() {
      if (window.innerWidth > 1024) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    }

    handleWidth();
    window.addEventListener("resize", handleWidth);
    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);

  return { isDesktop };
}
