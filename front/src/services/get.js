import axios from "axios";

export const get = async () => {
  const res = await axios.get("http://localhost:5000/products");
  if (res.status === 200) {
    return res?.data;
  }
};
