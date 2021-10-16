export default function getCountryByName(countries, countryName) {
  const regex = new RegExp(`^${countryName}$`, 'i');
  return countries.find(({ name }) => regex.test(name));
}
