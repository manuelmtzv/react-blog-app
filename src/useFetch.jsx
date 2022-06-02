
import { useEffect, useState } from "react";

export const useFetch = (URL) => {
  const [data, setData] = useState(null);  
  const [isPending, setIsPending] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(URL, { signal: abortCont.signal })
      .then(res => {
        if (!res.ok) throw Error("Could not fetch the data for that resource.")
        return res.json()
      })
      .then(data => {        
        setData(data);
        setIsPending(false); 
        setError(null); 
      })
      .catch(err => {
        setError(err.message); 
        setIsPending(false);
      })
    }, 1000);

    return () =>  abortCont.abort();
  }, [URL]);

  return { data, isPending, error }
}
