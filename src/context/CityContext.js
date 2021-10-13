import { createContext, useContext, useState } from "react";
const CityNameContext = createContext();

export const CityNameProvider = ({ children }) => {
  const [cityName, setCityName] = useState("İstanbul");
  const values = { cityName, setCityName };
  return (
    <CityNameContext.Provider value={values}>
      {children}
    </CityNameContext.Provider>
  );
};

export const useCityName = () => useContext(CityNameContext);
