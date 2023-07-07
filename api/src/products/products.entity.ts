import { Table, Column, Model, DataType } from 'sequelize-typescript';

export class ProductEntity {
  id?: number;
  name_product: string;
  reference: string;
  price: number;
  weight: number;
  category: string;
  stock: number;
  isDelete?: number;
  createAt?: string;
  updateAt?: string;
  deleteAt?: string;
}

@Table
export class Products extends Model<Products> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name_product: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    reference: string;

    @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    price: number;

    @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    weight: number;

    @Column({
      type: DataType.STRING,
      allowNull: false,
    })
    category: string;

    @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    stock: number;

    @Column({
      type: DataType.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    })
    isDelete: boolean;

    @Column({
      type: DataType.DATE,
      allowNull: true,
    })
    deletedAt: string;

    @Column({
      type: DataType.DATE,
      allowNull: true,
    })
    lastSale: string;
}

