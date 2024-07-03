import React, { useEffect, useState } from "react";
import { fetchCatPictures } from "./API";
export const App = () => {
  const [cat, setCat] = useState([]);

  useEffect(() => {
    const result = async () => {
      const data = await fetchCatPictures();
      console.log(data.data[0]);
      setCat(data.data[0]);
    };
    result();
  }, []);
  return (
    <>
      <h1>hello</h1>
      <div>
        <img src={cat.url} alt="" />
      </div>
    </>
  );
};

export default App;
