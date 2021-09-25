import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import QueryString from 'query-string';

function useSearchQuery() {
  const location = useLocation();
  const queryString = useMemo(() => QueryString.parse(location.search), [location]);

  return queryString;
}

export default useSearchQuery;
