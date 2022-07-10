import { Continent, ContinentCodeToContinentMap, ContinentCodeToCountriesMap, Country, CountryCodeToCountryMap, CountryCodeToLanguagesMap, Language, LanguageCodeToCountriesMap, LanguageCodeToLanguageMap } from "../types/types";

export function constructContinentCodeToContinentMap({
  continents,
}: {
  continents: Continent[];
}): ContinentCodeToContinentMap {
  return continents.reduce((acc, continent) => {
    acc[continent.code] = continent;
    return acc;
  }, {} as ContinentCodeToContinentMap);
};

export function constructCountryCodeToCountriesMap({
  countries,
}: {
  countries: Country[];
}): CountryCodeToCountryMap {
  return countries.reduce((acc, country) => {
    acc[country.code] = country;
    return acc;
  }, {} as CountryCodeToCountryMap);
};

export function constructLanguageCodeToLanguageMap({
  languages,
}: {
  languages: Language[];
}): LanguageCodeToLanguageMap {
  return languages.reduce((acc, language) => {
    acc[language.code] = language;
    return acc;
  }, {} as LanguageCodeToLanguageMap);
};

export function constructContinentCodeToCountriesMap({
  countries,
  continents
}: {
  countries: Country[];
  continents: Continent[];
}): ContinentCodeToCountriesMap {
  let continentCodeToCountriesMap: ContinentCodeToCountriesMap = {};

  // In the real world, a continent cannot exist without any countries.
  // But data-wise, this can exist. So, we need both countries and continents list to build the map.

  continents.reduce((acc, continent) => {
    acc[continent.code] = [];
    return acc;
  }, continentCodeToCountriesMap);
  countries.reduce((acc, country) => {
    if (!acc[country.continent.code]) {
      acc[country.continent.code] = [];
    }
    acc[country.continent.code].push(country);
    return acc;
  }, continentCodeToCountriesMap);

  return continentCodeToCountriesMap;
};

export function constructCountryCodeToLanguagesMap({
  countries,
  languageCodeToLanguagesMap,
}: {
  countries: Country[];
  languageCodeToLanguagesMap: LanguageCodeToLanguageMap;
}): CountryCodeToLanguagesMap {
  return countries.reduce((acc, country) => {
    acc[country.code] = country.languages.map(
      (genericCodeObject) =>
        languageCodeToLanguagesMap[genericCodeObject.code]
    );
    return acc;
  }, {} as CountryCodeToLanguagesMap);
};

export function constructLanguageCodeToCountriesMap({
  countries,
}: {
  countries: Country[];
}): LanguageCodeToCountriesMap {
  return countries.reduce((acc, country) => {
    country.languages.forEach((language) => {
      if (!acc[language.code]) {
        acc[language.code] = [];
      }
      acc[language.code].push(country);
    });
    return acc;
  }, {} as LanguageCodeToCountriesMap);
};