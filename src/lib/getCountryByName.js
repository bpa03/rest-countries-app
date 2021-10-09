export default function getCountryByName(countries, countryName) {
  return countries.find(({ name }) => name.toLowerCase().includes(countryName.toLowerCase()));
}
