import React from "react";

export const useIsIOS = () => {
  const [isIOS, setIsIOS] = React.useState(false);
  React.useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;
    const isSafari = /^((?!chrome|android|crios|fxios|edgios).)*safari/i.test(
      userAgent
    );
    setIsIOS(isSafari);
  }, []);
  return {
    isIOS,
  };
};
