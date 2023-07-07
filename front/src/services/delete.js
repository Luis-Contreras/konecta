import axios from "axios";

export const deleteAction = async (id) => {
  const res = await axios.delete(
    `http://localhost:5000/products/${id}`
  );
  if (res.status === 200) {
    return res?.data;
  }
};
