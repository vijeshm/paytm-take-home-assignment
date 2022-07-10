import "./App.css";
import { useEffect, useState } from "react";
import * as AppServices from "../../services/App.service";
import {
  constructLanguageCodeToLanguageMap,
  constructContinentCodeToCountriesMap,
  constructCountryCodeToLanguagesMap,
  constructLanguageCodeToCountriesMap,
} from "../../services/Utils.service";
import Dropdown from "../Dropdown/Dropdown";
import {
  Continent,
  ContinentCodeToCountriesMap,
  Country,
  CountryCodeToLanguagesMap,
  Language,
  LanguageCodeToCountriesMap,
  LanguageCodeToLanguageMap,
} from "../../types/types";
import LanguageList from "../LanguageList/LanguageList";

function App() {
  const [continents, setContinents] = useState<Continent[]>([]);
  const [currentContinents, setCurrentContinents] = useState<Continent[]>([]);
  const [selectedContinent, setSelectedContinent] = useState<Continent>();

  const [countries, setCountries] = useState<Country[]>([]);
  const [currentCountries, setCurrentCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country>();

  const [languages, setLanguages] = useState<Language[]>([]);
  const [currentLanguages, setCurrentLanguages] = useState<Language[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [continentCodeToCountriesMap, setContinentCodeToCountriesMap] =
    useState<ContinentCodeToCountriesMap>();
  const [countryCodeToLanguagesMap, setCountryCodeToLanguagesMap] =
    useState<CountryCodeToLanguagesMap>();
  const [languageCodeToCountriesMap, setLanguageCodeToCountriesMap] =
    useState<LanguageCodeToCountriesMap>();
  const [languageCodeToLanguageMap, setLanguageCodeToLanguageMap] =
    useState<LanguageCodeToLanguageMap>();

  const handleSelectedContinentChange = (selectedContinent: Continent) => {
    setSelectedContinent(selectedContinent);
  };

  const handleSelectedLanguageChange = (selectedLanguage: Language) => {
    setSelectedLanguage(selectedLanguage);
  };

  const handleSelectedCountryChange = (selectedCountry: Country) => {
    setSelectedCountry(selectedCountry);
  };

  // Initialize app data by fetching the continents, countries and languages
  useEffect(() => {
    AppServices.fetchAppData()
      .then((response) => response.json())
      .then((response) => {
        setContinents(response.data.continents);
        setCurrentContinents(response.data.continents);
        setSelectedContinent(response.data.continents[0]);

        setCountries(response.data.countries);

        setLanguages(response.data.languages);
        setCurrentLanguages(response.data.languages);
        setSelectedLanguage(response.data.languages[0]);

        setLanguageCodeToLanguageMap(
          constructLanguageCodeToLanguageMap({
            languages: response.data.languages,
          })
        );
        setContinentCodeToCountriesMap(
          constructContinentCodeToCountriesMap({
            countries: response.data.countries,
            continents: response.data.continents,
          })
        );
        if (languageCodeToLanguageMap) {
          // for handling undefined check by typescript
          setCountryCodeToLanguagesMap(
            constructCountryCodeToLanguagesMap({
              countries: response.data.countries,
              languageCodeToLanguagesMap: languageCodeToLanguageMap,
            })
          );
        }
        setLanguageCodeToCountriesMap(
          constructLanguageCodeToCountriesMap({
            countries: response.data.countries,
          })
        );

        setIsLoading(false);
      });
  }, []);

  // Whenever selection continent changes, or selected language changes, we need to re-compute the
  // list of countries shown to the user. This list of countries should be a part of the selected continent
  // AND the selected language should also be spoken in the country.
  // Note that the country can speak other languages too, which we list below the country selection.
  useEffect(() => {
    let currentCountries = countries?.filter((country) => {
      let shouldFilterIn = true;
      if (selectedContinent && continentCodeToCountriesMap) {
        shouldFilterIn =
          shouldFilterIn &&
          !!continentCodeToCountriesMap[selectedContinent.code].find(
            (innerCountry) => innerCountry.code === country.code
          );
      }
      if (selectedLanguage && languageCodeToCountriesMap) {
        shouldFilterIn =
          shouldFilterIn &&
          !!languageCodeToCountriesMap[selectedLanguage.code].find(
            (innerCountry) => innerCountry.code === country.code
          );
      }
      return shouldFilterIn;
    });

    setCurrentCountries(currentCountries);
    setSelectedCountry(currentCountries[0]);
  }, [selectedContinent, selectedLanguage]);

  return (
    <div className="App">
      {isLoading && <div className="loading">Loading...</div>}
      {!isLoading && (
        <div>
          <div className="form-field continent-selector">
            {/*
            As far as my understanding goes, if we have to add a filter to restrict the countries by language, languages will become the independent variables.
            So, there will be two independent variables in the system; continent, language.
            There will be one dependent variable; country.
            Based on the country chosen, we have to *show* (as list on the DOM, not within a select) the list of languages spoken in that country.
            */}
            <span className="label">Continent</span>:
            <Dropdown
              className="form-element"
              items={currentContinents}
              selectedItem={selectedContinent}
              handleSelectedItemChange={handleSelectedContinentChange}
            ></Dropdown>
          </div>
          <div className="form-field language-selector">
            <span className="label">Language</span>:
            <Dropdown
              className="form-element"
              items={currentLanguages}
              selectedItem={selectedLanguage}
              handleSelectedItemChange={handleSelectedLanguageChange}
            ></Dropdown>
          </div>
          <div className="form-field countries-selector">
            <span className="label">Available countries</span>:
            <Dropdown
              className="form-element"
              items={currentCountries}
              selectedItem={selectedCountry}
              handleSelectedItemChange={handleSelectedCountryChange}
            ></Dropdown>
          </div>
          {selectedCountry && languageCodeToLanguageMap && (
            <div className="languages-of-selected-country">
              <LanguageList
                className="language-list"
                country={selectedCountry}
                languageCodeToLanguagesMap={languageCodeToLanguageMap}
              ></LanguageList>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
