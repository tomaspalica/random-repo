import axios from "axios";
const key = import.meta.env.CAT_API_KEY;

export const fetchCatPictures = async () => {
  const respone = await axios.get(
    `https://api.thecatapi.com/v1/images/search?api_key=${key}`
  );
  console.log(respone);
  return respone;
};
