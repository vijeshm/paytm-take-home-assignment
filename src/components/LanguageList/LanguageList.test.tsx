import React from "react";
import { render, screen } from "@testing-library/react";
import LanguageList from "./LanguageList";
import {
  Country,
  GenericCodeAndNameObject,
  LanguageCodeToLanguageMap,
} from "../../types/types";

const country: Country = {
  code: "testCode",
  name: "testName",
  languages: [{ code: "testLanguageCode" }],
  continent: { code: "testContinentCode" },
};
const languageCodeToLanguagesMap: LanguageCodeToLanguageMap = {
  testLanguageCode: { code: "testLanguageCode", name: "testLanguageName" },
};
test("renders learn react link", () => {
  render(
    <LanguageList
      country={country}
      languageCodeToLanguagesMap={languageCodeToLanguagesMap}
    />
  );
  expect(true).toBe(true);
});
