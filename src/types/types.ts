export interface GenericCodeObject {
  code: string;
}

export interface GenericCodeAndNameObject {
  code: string;
  name: string;
}

export interface Country {
  code: string,
  name: string,
  languages: GenericCodeObject[];
  continent: GenericCodeObject
}

export interface Continent {
  code: string;
  name: string;
}

export interface Language {
  code: string;
  name: string;
}

export interface AppData {
  data: {
    countries: Country[];
    continents: Continent[];
    languages: Language[];
  }
}

export interface ContinentCodeToContinentMap {
  [key: string]: Continent;
}

export interface CountryCodeToCountryMap {
  [key: string]: Country;
}

export interface LanguageCodeToLanguageMap {
  [key: string]: Language;
}

export interface ContinentCodeToCountriesMap {
  [key: string]: Country[];
}

export interface CountryCodeToLanguagesMap {
  [key: string]: Language[];
}

export interface LanguageCodeToCountriesMap {
  [key: string]: Country[];
}