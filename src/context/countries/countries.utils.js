export const replaceRegionFilter = (filters, region) => ({
  ...filters,
  regionFilter: region,
});

export const replaceSearchQuery = (filters, query) => ({
  ...filters,
  searchQuery: query,
});
