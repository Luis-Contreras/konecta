import axios from "axios";

export const post = async (body) => {
  const res = await axios.post(
    "http://localhost:5000/products",
    body
  );
  if (res.status === 201) {
    return res?.data;
  }
};
