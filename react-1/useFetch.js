import React, {useState, useEffect} from 'react'

function useFetch(url) {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  const fetchUrl = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetchUrl(url);
      const data = await res.json();
      setData(data)
    } catch (e) {
      setError(e)
    } finally {
      setLoading(false);
    }
  }, [url])

  useEffect(() => {
    fetchUrl();
  }, [url])

  return {isLoading, data, error}
}

export default useFetch;