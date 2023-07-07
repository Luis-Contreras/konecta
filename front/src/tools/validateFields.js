export const validateFields = (data) => {
  const arrErrors = [];
  if (!data.name_product) {
    arrErrors.push("Nombre del producto requerido");
  }
  if (!data.reference) {
    arrErrors.push("Referencia del producto requerido");
  }
  if (!data.price) {
    arrErrors.push("Precio del producto requerido");
  }
  if (!data.weight) {
    arrErrors.push("Peso del producto requerido");
  }

  if (!data.category) {
    arrErrors.push("Categoria del producto requerido");
  }

  if (!data.stock) {
    arrErrors.push("Stock del producto requerido");
  }

  return arrErrors;
};
