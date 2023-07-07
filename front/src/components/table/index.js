import { Space, Table as TableAnt } from "antd";
import { EditFilled, DeleteFilled } from "@ant-design/icons";

export const Table = ({ data, actions }) => {
  const columns = [
    {
      title: "Nombre de producto",
      dataIndex: "name_product",
      key: "name_product",
    },
    {
      title: "Referencia",
      dataIndex: "reference",
      key: "reference",
    },
    {
      title: "Precio",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Peso",
      key: "weight",
      dataIndex: "weight",
    },
    {
      title: "Categoria",
      key: "category",
      dataIndex: "category",
    },
    {
      title: "Stock",
      key: "stock",
      dataIndex: "stock",
    },
    {
      title: "Ultima Venta",
      key: "lastSale",
      dataIndex: "lastSale",
      render: (_, record) => {
        const label = record.lastSale ? record.lastSale : 'no se han vendido productos'
        return(
          <p>{label}</p>
        )
      }
    },
    {
      title: "Acciones",
      key: "actions",
      dataIndex: "actions",
      render: (_, record) => (
        <Space size="middle">
          <div
            style={{ cursor: "pointer" }}
            onClick={() => actions(record, "EDIT")}
          >
            <EditFilled />
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => actions(record, "DELETE")}
          >
            <DeleteFilled />
          </div>
        </Space>
      ),
    },
  ];

  return <TableAnt columns={columns} dataSource={data} />;
};
