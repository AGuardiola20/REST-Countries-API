import { useEffect, useState } from "react";
import { Country } from "../types/types";

interface UseCountryState {
  data: Country | null;
  loading: boolean;
  error: string | null;
}

export const useCountry = (endpoint: string) => {
  const [state, setState] = useState<UseCountryState>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1${endpoint}`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const result = await response.json();
        const filteredData: Country = result.map((country: Country) => ({
          name: country.name,
          population: country.population,
          region: country.region,
          capital: country.capital,
          flags: country.flags,
        }));

        setState({ data: filteredData, loading: false, error: null });
      } catch (error: unknown) {
        const errorMessage =
          error instanceof Error ? error.message : "Error desconocido";
        setState({ data: null, loading: false, error: errorMessage });
      }
    };
    fetchData();
  }, [endpoint]);

  return state;
};
