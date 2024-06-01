import { useEffect, useState } from "react";

export function useFetchData(url) {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(result => setData(result))
      .catch(err => console.error(err));
  }, [url]);
  
  return data;
}
