function getCountriesByName(countries, q) {
  return countries.filter(({ name }) => name.toLowerCase().includes(q.toLowerCase()));
}

export default getCountriesByName;
