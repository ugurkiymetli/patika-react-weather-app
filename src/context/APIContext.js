import { createContext } from "react";

const APIContext = createContext();

export const ApiProvider = ({ children }) => {
  const API_KEY = "3fde3702425e4a829828152b3ee49305";
  return <APIContext.Provider value={API_KEY}>{children} </APIContext.Provider>;
};

export default APIContext;
