import React, { useEffect, useState } from "react";
import { Select, Input } from "../../components";

const FormSale = ({ data, dataSale, setDataSale }) => {
  const [selectData, setSelectData] = useState([]);

  useEffect(() => {
    if (data && data.length) {
      const prepArr = [];
      data.map((item) =>
        prepArr.push({ value: item.id, label: item.name_product })
      );
      setSelectData(prepArr);
    }
  }, [data]);

  return (
    <div>
      <Select
        style={{
          width: 470,
        }}
        value={dataSale.id}
        placeholder="Seleccione un producto a vender"
        options={selectData}
        onChange={(value) => setDataSale({ ...dataSale, id: value })}
      />
      <Input
        type="number"
        title="Cantidad"
        value={dataSale.stock}
        placeholder="Cantidad a vender"
        onChange={(e) => setDataSale({ ...dataSale, stock: e.target.value })}
      />
    </div>
  );
};

export default FormSale;
