export default function getCountriesByName(countries, q) {
  return countries.filter(({ name }) => name.toLowerCase().includes(q.toLowerCase()));
}
