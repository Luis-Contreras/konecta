import axios from "axios";

export const put = async (body) => {
  const id = body.id;
  const {
    category,
    name_product,
    price,
    reference,
    stock,
    weight,
  } = body;
  const res = await axios.put(`http://localhost:5000/products/${id}`, 
    {
      category,
      name_product,
      price,
      reference,
      stock,
      weight,
    },
  );
  if (res.status === 200) {
    return res?.data;
  }
};

export const putSale = async (body) => {
  const id = body.id;
  const {
    stock
  } = body;
  const res = await axios.put(`http://localhost:5000/products/sale/${id}`, 
    { stock },
  );
  if (res.status === 200) {
    return res?.data;
  }
};
