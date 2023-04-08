import axios from "../api/axios";

export const fetchApiGet = async (url) => {
  const response = await axios.get(url, {
    headers: {
      access_token: localStorage.access_token,
    },
  });
  const data = await response.data;
  console.log(data);
  return data;
};
