import React, { useEffect } from "react";

const LayoutWidth = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  useEffect( () => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return width ;
}

export default LayoutWidth;