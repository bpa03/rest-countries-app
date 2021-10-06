export default function getCountriesByRegion(countries, regionFilter) {
  return countries.filter(({ region }) => region === regionFilter);
}
