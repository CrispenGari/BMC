import React from "react";
export const useIsIOS = () => {
  const [isIOS, setIsIOS] = React.useState(false);
  React.useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;

    const isiOSDevice = /iPad|iPhone|iPod/.test(userAgent);
    const isSafari = /^((?!chrome|android|crios|fxios|edgios).)*safari/i.test(
      userAgent
    );
    setIsIOS(isiOSDevice || isSafari);
  }, []);

  return { isIOS };
};
