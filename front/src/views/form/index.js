import React from "react";
import {Input} from "../../components";

const Form = ({ formData, setFormData }) => {
  return (
    <div>
      <Input
        style={{ marginTop: 10 }}
        value={formData.name_product}
        placeholder="Nombre del producto"
        title="Nombre del producto"
        onChange={(e) =>
          setFormData({ ...formData, name_product: e.target.value })
        }
      />
      <Input
        style={{ marginTop: 10 }}
        value={formData.reference}
        placeholder="Referencia"
        title="Referencia"
        onChange={(e) =>
          setFormData({ ...formData, reference: e.target.value })
        }
      />
      <Input
        style={{ marginTop: 10 }}
        placeholder="Precio"
        value={formData.price}
        title="Precio"
        type="number"
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
      />
      <Input
        style={{ marginTop: 10 }}
        placeholder="Peso"
        title="Peso"
        value={formData.weight}
        type="number"
        onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
      />
      <Input
        style={{ marginTop: 10 }}
        placeholder="Categoria"
        value={formData.category}
        title="Categoria"
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
      />
      <Input
        style={{ marginTop: 10 }}
        placeholder="Stock"
        title="Stock"
        value={formData.stock}
        type="number"
        onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
      />
    </div>
  );
};

export default Form;
