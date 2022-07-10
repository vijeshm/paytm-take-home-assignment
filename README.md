## Assumptions
As far as my understanding goes, if we have to add a filter to restrict the countries by language, languages will become the independent variables.
So, there will be two independent variables in the system; continent, language.
There will be one dependent variable; country.
Based on the country chosen, we have to *show* (as list on the DOM, not within a select) the list of languages spoken in that country.

## Improvements
* When a continent is chosen, filter the list of languages as well.
* Improve test cases.
* Autocomplete feature, instead of select option.
* Currently, the UI is designed not to make subsequent queries on each selection, keeping run time performance in mind.
* Error scenarios