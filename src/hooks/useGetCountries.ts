import { useEffect, useState } from "react";
import { Country } from "../types/types";

interface UseCountryState {
  data: Country[] | null;
  loading: boolean;
  error: string | null;
}

export const useGetCountries = () => {
  const [state, setState] = useState<UseCountryState>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/all`);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const result = await response.json();

        const filteredData: Country[] = result.map((country: Country) => ({
          name: country.name?.common || "N/A",
          population: country.population || 0,
          region: country.region || "N/A",
          capital: country.capital?.[0] || "N/A",
          flags: country.flags?.png || "",
        }));

        setState({ data: filteredData, loading: false, error: null });
      } catch (error: unknown) {
        const errorMessage =
          error instanceof Error ? error.message : "Error desconocido";
        setState({ data: null, loading: false, error: errorMessage });
      }
    };

    fetchData();
  }, []);

  return state;
};
