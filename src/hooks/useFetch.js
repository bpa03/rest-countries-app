import { useState, useEffect, useRef } from 'react';

function useFetch(url) {
  const isMounted = useRef(true);
  const [values, setValues] = useState({
    loading: true,
    data: [],
    error: null,
  });

  useEffect(
    () => () => {
      isMounted.current = false;
    }, [],
  );

  useEffect(() => {
    if (!isMounted.current || url === '') {
      return;
    }

    const fetchData = () => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setValues((prevValues) => ({
            ...prevValues,
            loading: false,
            data,
          }));
        });
    };

    setValues((prevState) => ({ ...prevState, loading: true }));
    fetchData();
  }, [url]);

  return values;
}

export default useFetch;
