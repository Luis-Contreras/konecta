import { useEffect, useState } from "react";
import { deleteAction } from "../../services/delete";
import { callMessage } from "../../components";
import { validateFields } from "../../tools/validateFields";
import { get } from "../../services/get";
import { post } from "../../services/post";
import { put, putSale } from "../../services/put";

export const useMain = () => {
  const [data, setData] = useState([]);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalCreateUpdate, setModalCreateUpdate] = useState(false);
  const [modalSale, setModalSale] = useState(false);
  const [deleteItem, setDeleteItem] = useState();
  const [isCreate, setIsCreate] = useState(false);
  const [formData, setFormData] = useState({});
  const [dataSale, setDataSale] = useState({});

  useEffect(() => {
    const getData = async () => {
      const res = await get();
      if (res !== "Not Found") {
        setData(res);
      } else {
        setData([]);
      }
    };

    getData();
  }, [modalDelete, modalCreateUpdate, modalSale]);

  const deleteProduct = async () => {
    const res = await deleteAction(deleteItem);
    if (res === "deleted") {
      callMessage("Eliminado correctamente", "info");
      return setModalDelete(false);
    }
  };

  const updateProduct = async () => {
    const valErrors = validateFields(formData);
    if (valErrors.length > 0) {
      valErrors.map((err) => callMessage(err, "error"));
      return;
    }
    const res = await put(formData);
    if (res) {
      callMessage("Producto actualizado correctamente", "success");
      setModalCreateUpdate(false);
      setFormData({});
    } else {
      callMessage("El producto no se puede actualizar", "error");
      setModalCreateUpdate(false);
      setFormData({});
    }
  };

  const createProduct = async () => {
    const valErrors = validateFields(formData);
    if (valErrors.length > 0) {
      valErrors.map((err) => callMessage(err, "error"));
      return;
    }
    const res = await post(formData);
    if ((res.comment = "successfully created")) {
      callMessage("Producto creado correctamente", "success");
      setModalCreateUpdate(false);
      setFormData({});
    } else {
      callMessage("El producto no se puede crear", "error");
      setModalCreateUpdate(false);
      setFormData({});
    }
  };

  const actionsTable = (info, action) => {
    if (action === "EDIT") {
      setFormData(info);
      setModalCreateUpdate(true);
    }

    if (action === "DELETE") {
      setDeleteItem(info.id);
      setModalDelete(true);
    }
  };

  const actionSale = async () => {
    if (!dataSale?.id || !dataSale?.stock) {
      return callMessage("Ingrese el producto y la cantidad a vender", "error");
    }

    const currentStock = data.find((item) => item.id === dataSale?.id);

    if (currentStock.stock - dataSale?.stock < 0) {
      return callMessage(
        "La cantidad a vender supera a la cantidad existente",
        "error"
      );
    }

    const body = {
      id: dataSale?.id,
      stock: dataSale.stock,
    };

    const res = await putSale(body);
    if (res === "sale realized") {
      callMessage("Producto vendido correctamente", "success");
      setModalSale(false);
      setDataSale({});
    } else {
      callMessage("El producto no se puede vendido", "error");
      setModalSale(false);
      setDataSale({});
    }
  };

  return {
    createProduct,
    isCreate,
    setIsCreate,
    modalCreateUpdate,
    setModalCreateUpdate,
    modalSale,
    setModalSale,
    data,
    actionsTable,
    modalDelete,
    setModalDelete,
    deleteProduct,
    updateProduct,
    formData,
    setFormData,
    actionSale,
    setDataSale,
    dataSale
  }
};
