import { ChangeEvent, ReactEventHandler } from "react";
import {
  Country,
  GenericCodeAndNameObject,
  Language,
  LanguageCodeToLanguageMap,
} from "../../types/types";
import "./LanguageList.css";

function Dropdown({
  country,
  languageCodeToLanguagesMap,
  className,
}: {
  country: Country;
  languageCodeToLanguagesMap: LanguageCodeToLanguageMap;
  className?: string;
}) {
  return (
    <div className={`${className} language-list-for-country`}>
      <div className="country-name">Languages spoken in {country.name}:</div>
      {country.languages
        .map((language) => languageCodeToLanguagesMap[language.code].name)
        .join(", ")}
    </div>
  );
}

export default Dropdown;
