import { useEffect, useState } from "react";

export function useFetchData(url) {
  const [data, setData] = useState([]);
  
  useEffect(() =>{
    fetch(url)
      .then(response => response.json())
      .then(result => setData(result))
      .catch(err => console.error(err));
  }, [url]);
  
  return data;
}
