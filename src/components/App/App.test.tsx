import React from "react";
import {
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import App from "./App";
import { act } from "react-dom/test-utils";
import ReactDOM from "react-dom/client";
import * as appServices from "../../services/App.service";
import { AppData } from "../../types/types";

let appData: AppData = {
  data: {
    continents: [
      { code: "AS", name: "Asia" },
      { code: "EU", name: "Europe" },
    ],
    countries: [
      {
        code: "IN",
        name: "India",
        continent: { code: "AS" },
        languages: [{ code: "hn" }, { code: "en" }],
      },
      {
        code: "EN",
        name: "England",
        continent: { code: "EU" },
        languages: [{ code: "en" }],
      },
    ],
    languages: [
      { code: "hn", name: "Hindi" },
      { code: "en", name: "English" },
    ],
  },
};
beforeEach(() => {
  jest.spyOn(appServices, "fetchAppData").mockReturnValue(
    new Promise((resolve, reject) => {
      resolve({
        json: () => Promise.resolve(appData),
      } as Response);
    })
  );
});

test("renders loading screen", () => {
  const { container } = render(<App />);
  expect(container.getElementsByClassName("loading").length).toBe(1);
});

test("renders 3 dropdowns", async () => {
  const { container } = render(<App />);
  await waitForElementToBeRemoved(
    container.getElementsByClassName("loading")[0]
  );
  expect(container.getElementsByClassName("form-field").length).toBe(3);
});

test("selects the first continent as default", async () => {
  const { container } = render(<App />);
  await waitForElementToBeRemoved(
    container.getElementsByClassName("loading")[0]
  );
  const continentSelector =
    container.getElementsByClassName("continent-selector")[0];
  expect(continentSelector.getElementsByTagName("select")[0].value).toBe("AS");
});

test("selects the first language as default", async () => {
  const { container } = render(<App />);
  await waitForElementToBeRemoved(
    container.getElementsByClassName("loading")[0]
  );
  const languageSelector =
    container.getElementsByClassName("language-selector")[0];
  expect(languageSelector.getElementsByTagName("select")[0].value).toBe("hn");
});

test("selects the first available countries as default", async () => {
  const { container } = render(<App />);
  await waitForElementToBeRemoved(
    container.getElementsByClassName("loading")[0]
  );
  const availableCountries =
    container.getElementsByClassName("countries-selector")[0];
  expect(availableCountries.getElementsByTagName("select")[0].value).toBe("IN");
});

test("shows the list of languages for default country", async () => {
  const { container } = render(<App />);
  await waitForElementToBeRemoved(
    container.getElementsByClassName("loading")[0]
  );
  const availableCountries = container.getElementsByClassName(
    "languages-of-selected-country"
  )[0];
  expect(availableCountries).toBeTruthy();
});

test("list of countries should get updated when continent and language changes", async () => {
  const { container } = render(<App />);
  await waitForElementToBeRemoved(
    container.getElementsByClassName("loading")[0]
  );
  const continentsSelectElement = container
    .getElementsByClassName("continent-selector")[0]
    .getElementsByTagName("select")[0];
  const languagesSelectElement = container
    .getElementsByClassName("language-selector")[0]
    .getElementsByTagName("select")[0];
  // Change the dropdowns to Europe and English, and verify that England is getting autoselected.
  fireEvent.change(continentsSelectElement, { target: { value: "EU" } });
  fireEvent.change(languagesSelectElement, { target: { value: "en" } });
  const availableCountriesSelectElement = container
    .getElementsByClassName("countries-selector")[0]
    .getElementsByTagName("select")[0];
  expect(availableCountriesSelectElement.value).toBe("EN");
});

test("list of countries should become undefined when only continent changes", async () => {
  const { container } = render(<App />);
  await waitForElementToBeRemoved(
    container.getElementsByClassName("loading")[0]
  );
  const continentsSelectElement = container
    .getElementsByClassName("continent-selector")[0]
    .getElementsByTagName("select")[0];
  fireEvent.change(continentsSelectElement, { target: { value: "EU" } });
  // Language is still 'Hindi'. So, countries will not be rendered.
  const availableCountriesSelectElement = container
    .getElementsByClassName("countries-selector")[0]
    .getElementsByTagName("select")[0];
  expect(availableCountriesSelectElement).toBe(undefined);
});
