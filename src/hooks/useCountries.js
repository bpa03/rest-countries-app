import { useState, useEffect, useRef } from 'react';

import getAllCountries from 'services/getAllCountries';

function useCountries() {
  const isMounted = useRef(true);
  const [values, setValues] = useState({
    data: [],
    loading: true,
  });

  useEffect(
    () => () => {
      isMounted.current = false;
    },
    [],
  );

  useEffect(() => {
    if (!isMounted.current) {
      return;
    }

    const fetchData = () => {
      getAllCountries().then((data) => {
        setValues((prevValues) => ({
          ...prevValues,
          loading: false,
          data,
        }));
      });
    };

    setValues((prevState) => ({ ...prevState, loading: true }));
    fetchData();
  }, []);

  return values;
}

export default useCountries;
