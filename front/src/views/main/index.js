import React  from "react";
import Form from "../form";
import FormSale from "../formSale";
import { Button, Table, Modal } from "../../components";
import { useMain } from './useMain'

const Main = () => {

  const {
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
  } = useMain()

  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "end",
          marginBottom: 20,
        }}>
        <Button
          type="primary"
          onClick={() => {
            setIsCreate(true);
            setModalCreateUpdate(true);
          }}>
          Crear Producto
        </Button>
        <Button
          style={{ marginLeft: 5 }}
          type="primary"
          danger
          onClick={() => {
            setModalSale(true);
          }}>
          Crear Venta
        </Button>
      </div>

      <Table
        data={data}
        actions={(info, action) => actionsTable(info, action)}
      />
      <Modal
        title={"Eliminar Producto"}
        isModalOpen={modalDelete}
        setIsModalOpen={setModalDelete}
        actionOk={() => deleteProduct()}
        labelAction={"Eliminar"}>
        Esta seguro que desea eliminar este producto?
      </Modal>
      <Modal
        title={`${isCreate ? "Crear" : "Editar"} Producto`}
        isModalOpen={modalCreateUpdate}
        setIsModalOpen={setModalCreateUpdate}
        labelAction={isCreate ? "Crear" : "Editar"}
        actionOk={() => (isCreate ? createProduct() : updateProduct())}
        actionCancel={() => {
          setFormData({});
          setIsCreate(false);
        }}>
        <Form formData={formData} setFormData={setFormData} />
      </Modal>
      <Modal
        title={`Generar Venta`}
        isModalOpen={modalSale}
        setIsModalOpen={setModalSale}
        labelAction={"Generar Venta"}
        actionOk={() => actionSale()}
        actionCancel={() => {
          setDataSale({});
          setModalSale(false);
        }}>
        <FormSale data={data} dataSale={dataSale} setDataSale={setDataSale} />
      </Modal>
    </div>
  );
};

export default Main;
