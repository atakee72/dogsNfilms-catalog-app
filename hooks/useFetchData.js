import { useState, useEffect } from "react";

function useFetchData(url) {
  const [data, setData] = useState(null);
  const [done, setDone] = useState(false);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  useEffect(() => {
    fetch(url, options)
      .then((resp) => resp.json())
      .then((d) => {
        setData(d);
        setDone(true);
      });
  }, [url]);

  return {
    data,
    done,
  };
}

export default useFetchData;
