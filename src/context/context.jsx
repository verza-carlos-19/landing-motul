import { createContext } from "react";

export const themes = {
  open: {
    translate: "0",
    opacity: "0",
    opacityClosed: "1",
  },
  close: {
    translate: "100%",
    opacityClosed: "0",
    opacity: "1",
  },
};

const ThemeContext = createContext(themes.close);

export default ThemeContext;
