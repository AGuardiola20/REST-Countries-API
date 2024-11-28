export type Region =
  | "Africa"
  | "Americas"
  | "Asia"
  | "Europe"
  | "Oceania"
  | "Antarctic";

export interface Country {
  name: { common: string; official: string };
  population: number;
  region: Region;
  capital: string[];
  flags: { png: string; svg: string };
}
